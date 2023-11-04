import type {
  DocumentData,
  DocumentReference,
  Timestamp,
} from "firebase/firestore"
import type Stripe from "stripe"

export interface Subscription {
  cancel_at: Nullish<Timestamp>
  cancel_at_period_end: boolean
  cancelled_at: Nullish<Timestamp>
  created: Timestamp
  current_period_end: Timestamp
  current_period_start: Timestamp
  ended_at: Nullish<Timestamp>
  id?: string
  items: Stripe.SubscriptionItem[]
  latest_invoice?: string
  metadata: Record<string, string>
  payment_method?: string
  price: DocumentReference<DocumentData>
  prices: Array<DocumentReference<DocumentData>>
  product: DocumentReference<DocumentData>
  quantity: number
  role: Nullish<string>
  status:
    | "active"
    | "cancelled"
    | "incomplete_expired"
    | "incomplete"
    | "past_due"
    | "trialing"
    | "unpaid"
  stripeLink: string
  trial_end: Nullish<Timestamp>
  trial_start: Nullish<Timestamp>
}
