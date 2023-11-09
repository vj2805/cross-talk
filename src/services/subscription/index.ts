import createSubscriptionService from "./InMemorySubscriptionService"
import type { SubscriptionService } from "./SubscriptionService"

export type { PricingTier } from "@services/pricing"
export { getPricingTiers } from "@services/pricing"

export type { Subscription } from "./Subscription"

export const { syncSubscription }: SubscriptionService =
  createSubscriptionService()
