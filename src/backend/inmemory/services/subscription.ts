import { createStore } from "zustand/vanilla"
import { subscribeWithSelector } from "zustand/middleware"
import type { User } from "@/types/User"
import type { Subscription } from "@/types/Subscription"
import type { SubscriptionService } from "@/types/SubscriptionService"

type SubscriptionStore = Record<User["id"], Subscription>

export const { setState: setSubscription, subscribe } =
  createStore<SubscriptionStore>()(subscribeWithSelector(() => ({})))

const inMemorySubscriptionService: SubscriptionService = {
  syncSubscription(userId, onChange) {
    return subscribe(
      store => store[userId],
      subscription => onChange(subscription ?? null)
    )
  },
}

export default inMemorySubscriptionService
