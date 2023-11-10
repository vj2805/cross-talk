export class CheckoutError extends Error {
  constructor(code: CheckoutErrorCode) {
    super(`Checkout Error: ${code}`)
  }
}

export type CheckoutErrorCode = "Simulation Failure"
