import { showToast } from "@/components/ui"
import {
  createPaymentCheckout,
  subscribeToPaymentCheckout,
} from "@/services/payment"
import { useProcess } from "./useProcess"

export function useCheckout() {
  return useProcess(
    async (stop, userId: string, priceId: string) => {
      const [dismissToast, updateToast] = showToast({ open: false })
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
              updateToast({ error: checkout.response.error })
            }
            stop()
            unsubscribe()
            dismissToast()
          },
          error => updateToast({ error })
        )
      } catch (error) {
        updateToast({ error: error as Error })
        stop()
        dismissToast()
      }
    },
    {
      shouldStopFinally: false,
    }
  )
}
