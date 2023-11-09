import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { clientRepo } from "@backend/firebase"
import type { CheckoutService } from "./CheckoutService"

const createCheckout: CheckoutService["createCheckout"] = async (
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

export default function createFirestoreCheckoutService() {
  return { createCheckout }
}
