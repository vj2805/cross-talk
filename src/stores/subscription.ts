import { create } from "zustand"
import type { Subscription } from "@/types/Subscription"

interface SubscriptionStore {
  subscription: Optional<Subscription>
}

export const useSubscriptionStore = create<SubscriptionStore>(() => ({
  subscription: undefined,
}))

export const setSubscription = (subscription: Nullish<Subscription>) =>
  useSubscriptionStore.setState({ subscription })
