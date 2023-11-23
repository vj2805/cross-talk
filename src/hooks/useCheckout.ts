import { useState } from "react"
import { showToast } from "@/components/ui"
import { createPaymentCheckout } from "@/services/payment"

export function useCheckout() {
  const [running, setRunning] = useState(false)
  return [
    async (userId: string, priceId: string) => {
      if (running) {
        return
      }
      showToast({
        description: "Please wait while we create your checkout session...",
        title: "Payment Checkout",
      })
      try {
        setRunning(true)
        const unsubscribe = await createPaymentCheckout({
          listener: checkout => {
            if (checkout.response.status === "pending") {
              return
            }
            if (checkout.response.status === "success") {
              checkout.response.url &&
                window.location.assign(checkout.response.url)
            }
            if (checkout.response.status === "failure") {
              showToast({ error: checkout.response.error })
            }
            unsubscribe()
            setRunning(false)
          },
          priceId,
          userId,
        })
      } catch (error) {
        showToast({ error: error as Error })
        setRunning(false)
      }
    },
    running,
  ] as const
}
