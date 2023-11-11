import { paymentService } from "./internal"
import type { PaymentService } from "@/types/PaymentService"

export const {
  createPaymentCheckout,
  subscribeToPaymentCheckout,
}: PaymentService = paymentService
