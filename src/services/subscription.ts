import { collection, limit, onSnapshot, query, where } from "firebase/firestore"
import { clientRepo } from "@/configs/firebase/client"

function subscriptionsRef(userId: string) {
  return collection(clientRepo, "customers", userId, "subscriptions")
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
