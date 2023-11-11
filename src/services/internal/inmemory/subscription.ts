import { createStore } from "zustand/vanilla"
import { subscribeWithSelector } from "zustand/middleware"
import type { User } from "@/types/User"
import type { Subscription } from "@/types/Subscription"
import type { SubscriptionService } from "@/types/SubscriptionService"

export const {
  getState: getSubscriptions,
  setState: setSubscription,
  subscribe,
} = createStore<Record<User["id"], Subscription[]>>()(
  subscribeWithSelector(() => ({}))
)

const inMemorySubscriptionService: SubscriptionService = {
  syncSubscription(userId, onChange) {
    onChange(
      getSubscriptions()[userId]?.find(
        subscription => subscription.status === "active"
      ) ?? null
    )
    return subscribe(
      store =>
        store[userId]?.find(subscription => subscription.status === "active"),
      subscription => onChange(subscription ?? null)
    )
  },
}

export default inMemorySubscriptionService
