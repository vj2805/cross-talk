import type { Unsubscribe } from "./Unsubscribe"
import type { Checkout } from "./Checkout"

export interface PaymentService {
  createPaymentCheckout: (
    userId: string,
    priceId: string
  ) => Promise<Checkout["id"]>
  subscribeToPaymentCheckout: (
    checkoutId: Checkout["id"],
    listener: (checkout: Checkout) => void
  ) => Unsubscribe
}
