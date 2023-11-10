import { paymentService } from "@/backend"
import type { PaymentService } from "@/types/PaymentService"

export const {
  createPaymentCheckout,
  subscribeToPaymentCheckout,
}: PaymentService = paymentService
