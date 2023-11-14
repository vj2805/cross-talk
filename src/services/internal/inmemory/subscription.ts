import { subscribeToInMemoryStore } from "./store"
import type { SubscriptionService } from "@/types/SubscriptionService"

const inMemorySubscriptionService: SubscriptionService = {
  syncSubscription(userId, onChange) {
    return subscribeToInMemoryStore(
      "subscriptions",
      subscriptions =>
        subscriptions[userId]?.find(
          subscription => subscription.status === "active"
        ),
      subscription => onChange(subscription ?? null),
      {
        fireImmediately: true,
      }
    )
  },
}

export default inMemorySubscriptionService
