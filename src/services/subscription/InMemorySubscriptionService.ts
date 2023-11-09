import { getPricingTiers } from "@services/pricing/getPricingTiers"
import type { Subscription } from "./Subscription"
import type { SubscriptionService } from "./SubscriptionService"

const subscriptions: Map<string, Subscription> = new Map()

const listenersMap: Map<
  string,
  Set<(subscription: Nullish<Subscription>) => void>
> = new Map()

const syncSubscription: SubscriptionService["syncSubscription"] = (
  userId,
  onChange
) => {
  const existingListeners = listenersMap.get(userId) ?? new Set()
  existingListeners.add(onChange)
  listenersMap.set(userId, existingListeners)
  return () => listenersMap.delete(userId)
}

export default function createInMemorySubscriptionService(): SubscriptionService {
  return {
    getPricingTiers,
    syncSubscription,
  }
}
