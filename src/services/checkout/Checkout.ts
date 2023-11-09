export interface Checkout {
  cancel_url: string
  error?: Error
  price: string
  success_url: string
  url?: string
}

export type CheckoutErrorCode = "Simulation Failure"

export class CheckoutError extends Error {
  constructor(code: CheckoutErrorCode) {
    super(`Checkout Error: ${code}`)
  }
}
