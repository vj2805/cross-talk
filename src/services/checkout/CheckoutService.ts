export interface CheckoutService {
  createCheckout: (
    userId: string,
    priceId: string,
    onSuccess: (url: string) => void,
    onFailure: (error: Error) => void
  ) => Promise<void>
}
