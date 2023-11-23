import type { PaymentService } from "@/types/PaymentService"
import { default as paymentService } from "./internal/firebase/payment"

export const { createPaymentCheckout }: PaymentService = paymentService
