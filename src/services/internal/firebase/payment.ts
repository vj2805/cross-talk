import { addDoc, collection, doc, onSnapshot } from "firebase/firestore"
import { clientRepo } from "@/backend/firebase/client"
import type { Checkout } from "@/types/Checkout"
import type { PaymentService } from "@/types/PaymentService"
import type { FirestoreDataConverter } from "firebase/firestore"

const checkoutConverter: FirestoreDataConverter<Checkout> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      cancelUrl: data.cancel_url,
      id: snapshot.id,
      priceId: data.price,
      response: data.url
        ? { status: "success", url: data.url }
        : data.error
        ? { error: new Error(JSON.stringify(data.error)), status: "failure" }
        : { status: "pending" },
      successUrl: data.success_url,
    }
  },
  toFirestore(checkout) {
    return {
      cancel_url: checkout.cancelUrl,
      price: checkout.priceId,
      success_url: checkout.successUrl,
    }
  },
}

function checkoutsRef(userId: string) {
  return collection(
    clientRepo,
    "customers",
    userId,
    "checkout_sessions"
  ).withConverter(checkoutConverter)
}

function checkoutRef(userId: string, checkoutId: string) {
  return doc(checkoutsRef(userId), checkoutId)
}

const firebasePaymentService: PaymentService = {
  async createPaymentCheckout(userId, priceId) {
    const checkout = await addDoc(checkoutsRef(userId), {
      cancelUrl: window.location.origin,
      id: "",
      priceId,
      response: { status: "pending" },
      successUrl: window.location.origin,
    })
    return checkout.id
  },
  subscribeToPaymentCheckout(userId, checkoutId, onChange) {
    return onSnapshot(checkoutRef(userId, checkoutId), snapshot => {
      if (!snapshot.exists()) {
        return
      }
      onChange(snapshot.data())
    })
  },
}

export default firebasePaymentService
