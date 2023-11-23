import { addDoc, collection, onSnapshot } from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientRepo } from "@/backend/firebase/client"
import type { Checkout } from "@/types/Checkout"
import type { PaymentService } from "@/types/PaymentService"

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
        ? { error: new Error(data.error.message), status: "failure" }
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

const firebasePaymentService: PaymentService = {
  async createPaymentCheckout({ listener, priceId, userId }) {
    const checkout = await addDoc(checkoutsRef(userId), {
      cancelUrl: `${window.location.origin}/register`,
      id: "",
      priceId,
      response: { status: "pending" },
      successUrl: `${window.location.origin}/register`,
    })
    return onSnapshot(checkout, snapshot => {
      if (snapshot.exists()) {
        listener(snapshot.data())
      }
    })
  },
}

export default firebasePaymentService
