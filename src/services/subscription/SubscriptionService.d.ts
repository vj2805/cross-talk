import type { Subscription } from "./Subscription"

export interface SubscriptionService {
  syncSubscription: (
    userId: string,
    onChange: (subscription: Nullish<Subscription>) => void
  ) => () => void
}
