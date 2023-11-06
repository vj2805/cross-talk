import { collection } from "firebase/firestore"
import { clientRepo } from "@firebase"
import { subscriptionConverter } from "./converter"

export function subscriptionsRef(userId: string) {
  return collection(
    clientRepo,
    "customers",
    userId,
    "subscriptions"
  ).withConverter(subscriptionConverter)
}
