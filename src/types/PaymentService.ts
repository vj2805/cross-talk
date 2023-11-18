import type { Checkout } from "./Checkout"
import type { Consumer } from "./Consumer"
import type { Mutate, Unsubscribe } from "./Service"
import type { User } from "./User"

export interface PaymentService {
  createPaymentCheckout: Mutate<
    {
      priceId: Checkout["priceId"]
      userId: User["id"]
      listener: Consumer<Checkout>
    },
    Unsubscribe
  >
}
