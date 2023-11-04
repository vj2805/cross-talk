import { create } from "zustand"
import type { Subscription } from "@/types/Subscription"

interface SubscriptionStore {
  subscription: Optional<Subscription>
  setSubscription: (subscription: Nullish<Subscription>) => void
}

const useSubscriptionStore = create<SubscriptionStore>(set => ({
  setSubscription(subscription) {
    set({ subscription })
  },
  subscription: undefined,
}))

export const useSubscription = () =>
  useSubscriptionStore(store => store.subscription)

export const useSetSubscription = () =>
  useSubscriptionStore(store => store.setSubscription)
