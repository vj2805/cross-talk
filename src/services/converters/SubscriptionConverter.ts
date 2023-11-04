import type Stripe from "stripe"
import type {
  DocumentData,
  DocumentReference,
  Timestamp,
} from "firebase/firestore"

interface Subscription {
  id?: string
  metadata: Record<string, string>
  stripeLink: string
  role: Nullish<string>
  quantity: number
  items: Stripe.SubscriptionItem[]
  product: DocumentReference<DocumentData>
  price: DocumentReference<DocumentData>
  prices: Array<DocumentReference<DocumentData>>
  paymentMethod?: string
  latestInvoice?: string
  status:
    | "active"
    | "cancelled"
    | "incomplete_expired"
    | "incomplete"
    | "past_due"
    | "trialing"
    | "unpaid"
  shouldCancelAtPeriodEnd: boolean
  created: Timestamp
  currentPeriod: {
    start: Timestamp
    end: Timestamp
  }
  endedAt: Nullish<Timestamp>
  cancelAt: Nullish<Timestamp>
  cancelledAt: Nullish<Timestamp>
  trial: {
    start: Nullish<Timestamp>
    end: Nullish<Timestamp>
  }
}
