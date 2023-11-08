import { collection, onSnapshot, query, where } from "firebase/firestore"
import { clientRepo } from "@firebase"
import { pricingTiers } from "./InMemorySubscriptionService"
import type { Subscription } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { SubscriptionService } from "./SubscriptionService"

const subscriptionConverter: FirestoreDataConverter<Subscription> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      id: snapshot.id,
      role: data.role,
      status: data.status,
    }
  },
  toFirestore(subscription) {
    delete subscription.id
    return subscription
  },
}

function subscriptionsRef(userId: string) {
  return collection(
    clientRepo,
    "customers",
    userId,
    "subscriptions"
  ).withConverter(subscriptionConverter)
}

function activeSubscriptionRef(userId: string) {
  return query(subscriptionsRef(userId), where("status", "==", "active"))
}

const getPricingTiers: SubscriptionService["getPricingTiers"] = async () => {
  return pricingTiers
}

const syncSubscription: SubscriptionService["syncSubscription"] = (
  userId,
  onChange
) => {
  return onSnapshot(activeSubscriptionRef(userId), snapshot => {
    onChange(snapshot.empty ? null : snapshot.docs[0].data())
  })
}

export default function createFirestoreSubscriptionService(): SubscriptionService {
  return {
    getPricingTiers,
    syncSubscription,
  }
}
