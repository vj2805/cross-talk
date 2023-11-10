import type { Unsubscribe } from "./Unsubscribe"
import type { Checkout } from "./Checkout"

export interface PaymentService {
  createCheckout: (userId: string, priceId: string) => Promise<Checkout["id"]>
  subscribeToCheckout: (
    checkoutId: Checkout["id"],
    listener: (checkout: Checkout) => void
  ) => Unsubscribe
}
