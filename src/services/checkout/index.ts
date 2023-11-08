import createCheckoutService from "./InMemoryCheckoutService"
import type { CheckoutService } from "./CheckoutService"

export type { Checkout } from "./Checkout"

export const { createCheckout }: CheckoutService = createCheckoutService()
