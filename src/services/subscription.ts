import { collection, limit, onSnapshot, query, where } from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientRepo } from "@/configs/firebase/client"
import type { Subscription } from "@/types/Subscription"

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
    return {
      role: subscription.role,
      status: subscription.status,
    }
  },
}

function subscriptionsRef(userId: string) {
  const ref = collection(clientRepo, "customers", userId, "subscriptions")
  return ref.withConverter(subscriptionConverter)
}

export function activeSubscriptionRef(userId: string) {
  return query(
    subscriptionsRef(userId),
    where("status", "==", "active"),
    limit(1)
  )
}

export function syncIsPro(
  userId: string,
  setIsPro: (subscription: boolean) => void,
  setSubscriptionError: (error: Error) => void
) {
  return onSnapshot(
    activeSubscriptionRef(userId),
    snapshot => setIsPro(!snapshot.empty),
    setSubscriptionError
  )
}
