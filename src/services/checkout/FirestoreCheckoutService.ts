import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { clientRepo } from "@firebase"
import type { Checkout } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { CheckoutService } from "./CheckoutService"

const checkoutConverter: FirestoreDataConverter<Checkout> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      cancel_url: data.cancel_url,
      error: data.error,
      price: data.price,
      success_url: data.success_url,
      url: data.url,
    }
  },
  toFirestore(checkout) {
    delete checkout.error
    delete checkout.url
    return checkout
  },
}

function checkoutSessionsRef(userId: string) {
  return collection(
    clientRepo,
    "customers",
    userId,
    "checkout_sessions"
  ).withConverter(checkoutConverter)
}

const createCheckout: CheckoutService["createCheckout"] = async (
  userId,
  priceId,
  onSuccess,
  onFailure,
  onDetach
) => {
  const docRef = await addDoc(checkoutSessionsRef(userId), {
    cancel_url: window.location.origin,
    price: priceId,
    success_url: window.location.origin,
  })
  const unsubscribe = onSnapshot(docRef, snapshot => {
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
