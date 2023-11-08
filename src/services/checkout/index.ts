import createCheckoutService from "./InMemoryCheckoutService"
import type { CheckoutService } from "./CheckoutService"

export const { createCheckout }: CheckoutService = createCheckoutService()
