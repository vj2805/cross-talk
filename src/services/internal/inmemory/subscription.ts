import { subscribe } from "./store"
import type { SubscriptionService } from "@/types/SubscriptionService"

const inmemorySubscriptionService: SubscriptionService = {
  syncSubscription({ userId }, onChange) {
    return subscribe("subscriptions", subscriptions => {
      const subscription = subscriptions.find(
        subscription =>
          subscription.id.includes(userId) && subscription.status === "active"
      )
      onChange(subscription ?? null)
    })
  },
}

export default inmemorySubscriptionService
