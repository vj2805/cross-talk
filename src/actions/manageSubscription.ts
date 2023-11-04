"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import Stripe from "stripe"
import { env } from "@/env"
import { adminRepo } from "@/firebase-admin"
import { getSession } from "@/services/getSession"

const stripe = new Stripe(env["STRIPE_SECRET_KEY"], {
  apiVersion: "2023-10-16",
})

export async function manageSubscription() {
  const session = await getSession()
  const host = headers().get("host")

  if (!session?.user) {
    return console.error("User Not Found!")
  }

  const protocol = env["NODE_ENV"] === "development" ? "http" : "https"
  const returnUrl = new URL(`${protocol}://${host}/register`)

  const doc = await adminRepo.collection("customers").doc(session.user.id).get()

  if (!doc.exists) {
    return console.error("No customer record found with id ", session.user.id)
  }

  const stripeId = doc.data()!.stripeId

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: stripeId,
    return_url: returnUrl.toString(),
  })

  redirect(stripeSession.url)
}
