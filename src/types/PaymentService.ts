export interface PaymentService {
  createCheckout: (userId: string, priceId: string) => Promise<string>
}
