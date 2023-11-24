import { addDoc, collection, documentId, onSnapshot } from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientRepo } from "@/configs/firebase/client"
import type { Checkout } from "@/types/Checkout"

const checkoutConverter: FirestoreDataConverter<Checkout> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      cancelUrl: data.cancel_url,
      id: snapshot.id,
      priceId: data.price,
      response: data.url
        ? {
            status: "success",
            url: data.url,
          }
        : data.error
        ? {
            error: new Error(data.error.message),
            status: "failure",
          }
        : {
            status: "pending",
          },
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
  const ref = collection(clientRepo, "customers", userId, "checkout_sessions")
  return ref.withConverter(checkoutConverter)
}

export async function createPaymentCheckout(userId: string, priceId: string) {
  return await new Promise<string>(async (resolve, reject) => {
    const checkout = await addDoc(checkoutsRef(userId), {
      cancelUrl: `${window.location.origin}/register`,
      id: documentId(),
      priceId,
      response: { status: "pending" },
      successUrl: `${window.location.origin}/register`,
    })

    const unsubscribe = onSnapshot(checkout, snapshot => {
      if (!snapshot.exists()) {
        return
      }
      const checkout = snapshot.data()
      if (checkout.response.status === "pending") {
        return
      }
      unsubscribe()
      if (checkout.response.status === "failure") {
        return reject(checkout.response.error)
      }
      return resolve(checkout.response.url)
    })
  })
}
