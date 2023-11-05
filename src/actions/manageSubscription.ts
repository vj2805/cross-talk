"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import Stripe from "stripe"
import { env } from "@/env"
import { adminRepo } from "@/firebase-admin"
import { getServerUser } from "@/services/getServerUser"

const stripe = new Stripe(env["STRIPE_SECRET_KEY"], {
  apiVersion: "2023-10-16",
})

export async function manageSubscription() {
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

function getReturnUrl(host: Nullish<string>) {
  const protocol = env["NODE_ENV"] === "development" ? "http" : "https"
  return `${protocol}://${host}/register`
}
