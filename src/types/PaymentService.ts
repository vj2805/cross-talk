import type { Checkout } from "./Checkout"
import type { Unsubscribe } from "./Unsubscribe"
import type { User } from "./User"

export interface PaymentService {
  createPaymentCheckout: (
    userId: User["id"],
    priceId: Checkout["priceId"]
  ) => Promise<Checkout["id"]>
  subscribeToPaymentCheckout: (
    userId: User["id"],
    checkoutId: Checkout["id"],
    onChange: (checkout: Checkout) => void
  ) => Unsubscribe
}
