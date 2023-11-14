import type { Checkout } from "./Checkout"
import type { Mutate, Subscribe } from "./Service"
import type { User } from "./User"

export interface PaymentService {
  createPaymentCheckout: Mutate<
    {
      priceId: Checkout["priceId"]
      userId: User["id"]
    },
    Checkout["id"]
  >
  subscribeToPaymentCheckout: Subscribe<
    {
      checkoutId: Checkout["id"]
      userId: User["id"]
    },
    Checkout
  >
}
