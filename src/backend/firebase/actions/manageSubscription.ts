"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { createBillingPortalSession } from "@/backend/stripe"
import { env } from "@/env"
import { getServerUser } from "@/services/auth"
import { adminRepo } from "../admin"

function getReturnUrl() {
  const protocol = env["NODE_ENV"] === "development" ? "http" : "https"
  const host = headers().get("host")
  return `${protocol}://${host}/subscribe`
}

async function getCustomerStripeId(userId: string) {
  const snapshot = await adminRepo.collection("customers").doc(userId).get()
  return snapshot.data()?.stripeId
}

export async function manageSubscription() {
  const user = await getServerUser()
  if (!user) {
    throw new Error("[manageSubscription] User is null")
  }

  const stripeId = await getCustomerStripeId(user.id)
  if (!stripeId) {
    throw new Error(
      `[manageSubscription] No customer record found with id (${user.id})`
    )
  }

  const returnUrl = getReturnUrl()
  const stripeSession = await createBillingPortalSession(stripeId, returnUrl)

  redirect(stripeSession.url)
}