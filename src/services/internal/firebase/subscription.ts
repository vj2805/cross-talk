import { collection, onSnapshot, query, where } from "firebase/firestore"
import { clientRepo } from "@/backend/firebase/client"
import type { Subscription } from "@/types/Subscription"
import type { SubscriptionService } from "@/types/SubscriptionService"
import type { FirestoreDataConverter } from "firebase/firestore"

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

function activeSubscriptionRef(userId: string) {
  return query(
    collection(clientRepo, "customers", userId, "subscriptions"),
    where("status", "==", "active")
  ).withConverter(subscriptionConverter)
}

const firestoreSubscriptionService: SubscriptionService = {
  syncSubscription({ userId }, onChange) {
    return onSnapshot(activeSubscriptionRef(userId), snapshot => {
      onChange(snapshot.empty ? null : snapshot.docs[0].data())
    })
  },
}

export default firestoreSubscriptionService
