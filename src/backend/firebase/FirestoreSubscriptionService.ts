import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import { clientRepo } from "@backend/firebase/client"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { Subscription } from "../../types/Subscription"
import type { SubscriptionService } from "../../types/SubscriptionService"

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

function activeSubscriptionRef(userId: string) {
  return query(
    collection(clientRepo, "customers", userId, "subscriptions"),
    where("status", "==", "active")
  ).withConverter(subscriptionConverter)
}

const createCheckout: SubscriptionService["createCheckout"] = async (
  userId,
  priceId,
  onSuccess,
  onFailure,
  onDetach
) => {
  const checkoutRef = await addDoc(
    collection(clientRepo, "customers", userId, "checkout_sessions"),
    {
      cancel_url: window.location.origin,
      price: priceId,
      success_url: window.location.origin,
    }
  )
  const unsubscribe = onSnapshot(checkoutRef, snapshot => {
    const checkout = snapshot.data()!
    if (checkout.error) {
      onFailure(checkout.error)
    }
    if (checkout.url) {
      onSuccess(checkout.url)
    }
    unsubscribe()
    onDetach()
  })
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
  return { createCheckout, syncSubscription }
}
