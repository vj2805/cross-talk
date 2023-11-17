import { showErrorToast } from "@/components/ui"
import {
  createPaymentCheckout,
  subscribeToPaymentCheckout,
} from "@/services/payment"
import { useProcess } from "./useProcess"

export function useCheckout() {
  return useProcess(
    async (stop, userId: string, priceId: string) => {
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
            stop()
            unsubscribe()
          },
          showErrorToast
        )
      } catch (error) {
        showErrorToast(error as Error)
        stop()
      }
    },
    {
      shouldStopFinally: false,
    }
  )
}
