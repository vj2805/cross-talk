import { addDoc, collection } from "firebase/firestore"
import { clientRepo } from "@/firebase"

interface AddCheckoutSessionParams {
  priceId: string
  userId: string
}

export function addCheckoutSession({
  priceId,
  userId,
}: AddCheckoutSessionParams) {
  return addDoc(
    collection(clientRepo, "customers", userId, "checkout_sessions"),
    {
      cancel_url: window.location.origin,
      price: priceId,
      success_url: window.location.origin,
    }
  )
}
