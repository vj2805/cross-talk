import { collection } from "firebase/firestore"
import { clientRepo } from "@backend/firebase"

export function checkoutSessionsRef(userId: string) {
  return collection(clientRepo, "customers", userId, "checkout_sessions")
}
