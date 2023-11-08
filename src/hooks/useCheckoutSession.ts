import { createCheckout } from "@services/checkout"
import { useProcess } from "./useProcess"

export function useCheckoutSession(userId: string, priceId: string) {
  const { error, processing, setError, startProcess, stopProcess } =
    useProcess()

  async function createCheckoutSession() {
    if (processing) {
      return
    }
    startProcess()
    try {
      await createCheckout(
        userId,
        priceId,
        window.location.assign,
        setError,
        stopProcess
      )
    } catch (error) {
      setError(error as Error)
      stopProcess()
    }
  }

  return { createCheckoutSession, error, processing }
}
