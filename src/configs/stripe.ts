import { Stripe } from "stripe"
import { getEnv } from "@/configs/env"

const stripe = new Stripe(getEnv("STRIPE_SECRET_KEY"), {
  apiVersion: "2023-10-16",
})

export function createBillingPortalSession(
  stripeId: string,
  returnUrl: string
) {
  return stripe.billingPortal.sessions.create({
    customer: stripeId,
    return_url: returnUrl,
  })
}
