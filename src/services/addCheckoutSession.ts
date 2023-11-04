import { addDoc } from "firebase/firestore"
import { checkoutSessionsRef } from "./collections/checkoutSessionsRef"

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
