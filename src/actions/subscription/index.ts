import createInMemorySubscriptionActions from "./InMemorySubscriptionActions"
import type { SubscriptionActions } from "./SubscriptionActions"

export const { manageSubscription }: SubscriptionActions =
  createInMemorySubscriptionActions()
