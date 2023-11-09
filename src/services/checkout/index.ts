import createCheckoutService from "./InMemoryCheckoutService"
import type { CheckoutService } from "./CheckoutService"

export type { Checkout, CheckoutError, CheckoutErrorCode } from "./Checkout"

export const { createCheckout }: CheckoutService = createCheckoutService()
