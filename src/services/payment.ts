import { default as paymentService } from "./internal/firebase/payment"
import type { PaymentService } from "@/types/PaymentService"

export const {
  createPaymentCheckout,
  subscribeToPaymentCheckout,
}: PaymentService = paymentService
