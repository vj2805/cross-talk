import { onSnapshot } from "firebase/firestore"
import { subscriptionsRef } from "./collections/subscriptionsRef"
import type { Subscription } from "@types"
import type { QuerySnapshot } from "firebase/firestore"

export function syncSubscription(
  userId: string,
  observer: (snapshot: QuerySnapshot<Subscription>) => void
) {
  return onSnapshot(subscriptionsRef(userId), observer)
}
