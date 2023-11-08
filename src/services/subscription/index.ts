import createSubscriptionService from "./InMemorySubscriptionService"
import type { SubscriptionService } from "./SubscriptionService"

export const { getPricingTiers, syncSubscription }: SubscriptionService =
  createSubscriptionService()
