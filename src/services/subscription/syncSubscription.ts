import { onSnapshot } from "firebase/firestore"
import { setSubscription } from "@stores"
import { subscriptionsRef } from "./refs"

export function syncSubscription(userId: string) {
  return onSnapshot(subscriptionsRef(userId), snapshot => {
    setSubscription(snapshot.empty ? null : snapshot.docs[0].data())
  })
}
