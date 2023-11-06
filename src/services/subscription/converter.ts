import type { Subscription } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"

export const subscriptionConverter: FirestoreDataConverter<Subscription> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      cancel_at: data.cancel_at,
      cancel_at_period_end: data.cancel_at_period_end,
      cancelled_at: data.cancelled_at,
      created: data.created,
      current_period_end: data.current_period_end,
      current_period_start: data.current_period_start,
      ended_at: data.ended_at,
      id: snapshot.id,
      items: data.items,
      latest_invoice: data.latest_invoice,
      metadata: data.metadata,
      payment_method: data.payment_method,
      price: data.price,
      prices: data.prices,
      product: data.product,
      quantity: data.quantity,
      role: data.role,
      status: data.status,
      stripeLink: data.stripeLink,
      trial_end: data.trial_end,
      trial_start: data.trial_start,
    }
  },
  toFirestore(subscription) {
    delete subscription.id
    return subscription
  },
}
