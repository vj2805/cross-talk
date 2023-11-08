import type { Checkout } from "@types"
import type { CheckoutService } from "./CheckoutService"

const checkouts: Map<string, Checkout[]> = new Map()

function _createCheckout(userId: string, priceId: string) {
  return new Promise<Checkout>(resolve => {
    setTimeout(() => {
      const existingCheckouts = checkouts.get(userId) ?? []
      const newCheckout = {
        cancel_url: window.location.origin,
        price: priceId,
        success_url: window.location.origin,
      }
      checkouts.set(userId, [...existingCheckouts, newCheckout])
      resolve(newCheckout)
    }, 1000)
  })
}

const createCheckout: CheckoutService["createCheckout"] = async (
  userId,
  priceId,
  onSuccess,
  onFailure
) => {
  const checkout = await _createCheckout(userId, priceId)
  setTimeout(() => {
    if (Math.random() < 0.5) {
      onSuccess((checkout.url = window.location.origin))
    } else {
      onFailure(
        (checkout.error = Error("CheckoutError [This is a simulated error]"))
      )
    }
  }, 1000)
}

export default function createInMemoryCheckoutService(): CheckoutService {
  return { createCheckout }
}
