import { useState } from "react"
import { showToast } from "@/components/ui"
import { createPaymentCheckout } from "@/services/payment"

export function useCreateCheckout() {
  const [running, setRunning] = useState(false)

  async function run(userId: string, priceId: string) {
    if (running) {
      return
    }
    setRunning(true)
    showToast({
      description: "Please wait while we create your checkout session...",
      title: "Payment Checkout",
    })
    try {
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
  }

  return [run, running] as const
}
