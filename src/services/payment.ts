import { default as paymentService } from "./internal/inmemory/payment"
import type { PaymentService } from "@/types/PaymentService"

export const { createPaymentCheckout }: PaymentService = paymentService
