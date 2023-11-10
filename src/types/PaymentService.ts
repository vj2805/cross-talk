import type { Checkout } from "./Checkout"

export interface PaymentService {
  createCheckout: (userId: string, priceId: string) => Promise<string>
  listenCheckout: (
    checkoutId: string,
    listener: (checkout: Checkout) => void
  ) => void
}
