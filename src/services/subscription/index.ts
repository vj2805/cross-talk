import createSubscriptionService from "./InMemorySubscriptionService"
import type { SubscriptionService } from "./SubscriptionService"

export type { Subscription } from "./Subscription"

export const { createCheckout, syncSubscription }: SubscriptionService =
  createSubscriptionService()
