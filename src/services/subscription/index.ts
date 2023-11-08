import createSubscriptionService from "./InMemorySubscriptionService"
import type { SubscriptionService } from "./SubscriptionService"

export type { PricingTier } from "./PricingTier"
export type { Subscription } from "./Subscription"

export const { getPricingTiers, syncSubscription }: SubscriptionService =
  createSubscriptionService()
