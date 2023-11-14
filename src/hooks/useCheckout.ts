import {
  createPaymentCheckout,
  subscribeToPaymentCheckout,
} from "@/services/payment"
import { useProcess } from "./useProcess"

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
      const checkoutId = await createPaymentCheckout({ priceId, userId })
      const unsubscribe = subscribeToPaymentCheckout(
        { checkoutId, userId },
        checkout => {
          if (checkout.response.status === "pending") {
            return
          }
          if (checkout.response.status === "success") {
            checkout.response.url &&
              window.location.assign(checkout.response.url)
          }
          if (checkout.response.status === "failure") {
            setError(checkout.response.error)
          }
          stopProcess()
          unsubscribe()
        },
        setError
      )
    } catch (error) {
      setError(error as Error)
      stopProcess()
    }
  }

  return { createCheckout, error, processing }
}
