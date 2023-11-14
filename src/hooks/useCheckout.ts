import {
  createPaymentCheckout,
  subscribeToPaymentCheckout,
} from "@/services/payment"
import { showErrorToast } from "@/components/ui"
import { useProcess } from "./useProcess"

export function useCheckout(userId: Uncertain<string>, priceId: string) {
  const { processing, startProcess, stopProcess } = useProcess()

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
            showErrorToast(checkout.response.error)
          }
          stopProcess()
          unsubscribe()
        },
        showErrorToast
      )
    } catch (error) {
      showErrorToast(error as Error)
      stopProcess()
    }
  }

  return { createCheckout, processing }
}
