import {
  createPaymentCheckout,
  subscribeToPaymentCheckout,
} from "@services/payment"
import { useProcess } from "../useProcess"

export function useCheckout(userId: Uncertain<string>, priceId: string) {
  const { error, processing, setError, startProcess, stopProcess } =
    useProcess()

  async function createCheckout() {
    if (!userId) {
      return
    }
    if (processing) {
      return
    }
    startProcess()
    try {
      const checkoutId = await createPaymentCheckout(userId, priceId)
      const unsubscribe = subscribeToPaymentCheckout(
        userId,
        checkoutId,
        checkout => {
          if (checkout.response.status === "pending") {
            return
          }
          if (checkout.response.status === "success") {
            window.location.assign(checkout.response.url)
          }
          if (checkout.response.status === "failure") {
            setError(checkout.response.error)
          }
          stopProcess()
          unsubscribe()
        }
      )
    } catch (error) {
      setError(error as Error)
      stopProcess()
    }
  }

  return { createCheckout, error, processing }
}
