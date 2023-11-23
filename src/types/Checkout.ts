import type { Model } from "./Model"

export interface Checkout extends Model {
  priceId: string
  successUrl: string
  cancelUrl: string
  response:
    | {
        status: "failure"
        error: Error
      }
    | {
        status: "pending"
      }
    | {
        status: "success"
        url: string
      }
}
