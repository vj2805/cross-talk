import { addDoc, collection } from "firebase/firestore"
import { clientRepo } from "@/firebase"

export function addCheckoutSession({
  priceId,
  userId,
}: {
  priceId: string
  userId: string
}) {
  return addDoc(
    collection(clientRepo, "customers", userId, "checkout_sessions"),
    {
      cancel_url: window.location.origin,
      price: priceId,
      success_url: window.location.origin,
    }
  )
}
