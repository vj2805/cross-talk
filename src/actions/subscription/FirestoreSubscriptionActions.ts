import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { adminRepo } from "@backend/firebase"
import { stripe } from "@backend/stripe"
import { env } from "@env"
import { getServerUser } from "@services/auth"

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

export default function createFirestoreSubscriptionActions() {
  return { manageSubscription }
}
