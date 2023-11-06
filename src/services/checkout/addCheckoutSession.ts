import { addDoc } from "firebase/firestore"
import { checkoutSessionsRef } from "./refs"

interface AddCheckoutSessionParams {
  priceId: string
  userId: string
}

export function addCheckoutSession({
  priceId,
  userId,
}: AddCheckoutSessionParams) {
  return addDoc(checkoutSessionsRef(userId), {
    cancel_url: window.location.origin,
    price: priceId,
    success_url: window.location.origin,
  })
}
