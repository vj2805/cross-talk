import { useState } from "react"
import { showToast } from "@/components/ui"
import { createPaymentCheckout } from "@/services/payment"

export function useCreateCheckout() {
  const [isProcessing, setIsProcessing] = useState(false)

  async function execute(userId: string, priceId: string) {
    if (isProcessing) {
      return
    }
    setIsProcessing(true)
    showToast({
      description: "Please wait while we create your checkout session...",
      title: "Payment Checkout",
    })
    try {
      const url = await createPaymentCheckout(userId, priceId)
      showToast({
        description: "Redirecting to payment portal...",
        title: "Payment Portal",
      })
      location.assign(url)
    } catch (error) {
      showToast({ error: error as Error })
      setIsProcessing(false)
    }
  }

  return [execute, isProcessing] as const
}
