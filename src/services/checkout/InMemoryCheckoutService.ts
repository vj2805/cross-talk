import { CheckoutError } from "./Checkout"
import type { Checkout } from "./Checkout"
import type { CheckoutService } from "./CheckoutService"

const checkouts: Map<string, Checkout[]> = new Map()

const createCheckout: CheckoutService["createCheckout"] = (
  userId,
  priceId,
  onSuccess,
  onFailure,
  onDetach
) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const response = window.confirm(
        [
          "This is a simulated checkout session!",
          "Click OK to simulate SUCCESS / Click CANCEL to simulate FAILURE",
        ].join("\n")
      )
      if (!response) {
        onFailure(new CheckoutError("Simulation Failure"))
        onDetach()
        return
      }
      const existingCheckouts = checkouts.get(userId) ?? []
      const checkout = {
        cancel_url: window.location.origin,
        price: priceId,
        success_url: window.location.origin,
      }
      checkouts.set(userId, [...existingCheckouts, checkout])
      window.alert("This is a simulated success!")
      onSuccess(window.location.origin)
      onDetach()
      resolve()
    }, 1000)
  })
}

export default function createInMemoryCheckoutService(): CheckoutService {
  return { createCheckout }
}
