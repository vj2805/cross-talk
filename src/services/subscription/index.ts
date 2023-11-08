import createSubscriptionService from "./InMemorySubscriptionService"
import type { SubscriptionService } from "./SubscriptionService"

export const { getPricingTiers, getSubscription }: SubscriptionService =
  createSubscriptionService()
