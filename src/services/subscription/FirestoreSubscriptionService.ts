import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { adminRepo, clientRepo } from "@backend/firebase"
import { stripe } from "@backend/stripe"
import { env } from "@env"
import { getServerUser } from "@services/auth"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { Subscription } from "./Subscription"
import type { SubscriptionService } from "./SubscriptionService"

const subscriptionConverter: FirestoreDataConverter<Subscription> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      id: snapshot.id,
      role: data.role,
      status: data.status,
    }
  },
  toFirestore(subscription) {
    delete subscription.id
    return subscription
  },
}

function activeSubscriptionRef(userId: string) {
  return query(
    collection(clientRepo, "customers", userId, "subscriptions"),
    where("status", "==", "active")
  ).withConverter(subscriptionConverter)
}

const createCheckout: SubscriptionService["createCheckout"] = async (
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

const syncSubscription: SubscriptionService["syncSubscription"] = (
  userId,
  onChange
) => {
  return onSnapshot(activeSubscriptionRef(userId), snapshot => {
    onChange(snapshot.empty ? null : snapshot.docs[0].data())
  })
}

function getReturnUrl(host: Nullish<string>) {
  const protocol = env["NODE_ENV"] === "development" ? "http" : "https"
  return `${protocol}://${host}/subscribe`
}

async function manageSubscription() {
  "use server"

  const user = await getServerUser()

  if (!user) {
    return console.error("User Not Found!")
  }

  const doc = await adminRepo.collection("customers").doc(user.id).get()

  if (!doc.exists) {
    return console.error("No customer record found with id ", user.id)
  }

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: doc.data()!.stripeId,
    return_url: getReturnUrl(headers().get("host")),
  })

  redirect(stripeSession.url)
}

export default function createFirestoreSubscriptionService(): SubscriptionService {
  return { createCheckout, manageSubscription, syncSubscription }
}
