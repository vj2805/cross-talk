import { ToastableError } from "./ToastableError"

export class PaymentError extends ToastableError {
  name = "Payment Error"
  constructor(code: PaymentErrorCode) {
    super(code)
  }
}

type PaymentErrorCode = "A checkout session is already pending!"
