export class PaymentError extends Error {
  name = "Payment Error"
  constructor(code: PaymentErrorCode) {
    super(code)
  }
}

type PaymentErrorCode = "A checkout session is already pending!"
