// import type { DocumentReference, Timestamp } from "firebase/firestore"
// import type Stripe from "stripe"

export type Subscription = {
  // cancel_at: Nullish<Timestamp>
  // cancel_at_period_end: boolean
  // cancelled_at: Nullish<Timestamp>
  // created: Timestamp
  // current_period_end: Timestamp
  // current_period_start: Timestamp
  // ended_at: Nullish<Timestamp>
  id?: string
  // items: Stripe.SubscriptionItem[]
  // latest_invoice?: string
  // metadata: Record<string, string>
  // payment_method?: string
  // price: DocumentReference
  // prices: DocumentReference[]
  // product: DocumentReference
  // quantity: number
  role: Nullish<string>
  status:
    | "active"
    | "canceled"
    | "incomplete_expired"
    | "incomplete"
    | "past_due"
    | "trialing"
    | "unpaid"
  // stripeLink: string
  // trial_end: Nullish<Timestamp>
  // trial_start: Nullish<Timestamp>
}
