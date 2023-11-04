import { create } from "zustand"
import type { Subscription } from "@/types/Subscription"

interface SubscriptionStore {
  subscription: Nullish<Subscription>
}

export const useSubscriptionStore = create<SubscriptionStore>(() => ({
  subscription: null,
}))

export const setSubscription = (subscription: Nullish<Subscription>) =>
  useSubscriptionStore.setState({ subscription })
