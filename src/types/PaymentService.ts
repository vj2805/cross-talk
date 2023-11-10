import type { Unsubscribe } from "./Unsubscribe"
import type { Checkout } from "./Checkout"

export interface PaymentService {
  createCheckout: (userId: string, priceId: string) => Promise<string>
  subscribeToCheckout: (
    checkoutId: string,
    listener: (checkout: Checkout) => void
  ) => Unsubscribe
}
