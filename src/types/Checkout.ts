import type { Model } from "./Model"

export interface Checkout extends Model {
  price: string
  success_url: string
  cancel_url: string
  response:
    | {
        status: "failure"
        error: Error
      }
    | {
        status: "loading"
      }
    | {
        status: "success"
        url: string
      }
}
