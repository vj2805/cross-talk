import { create } from "zustand"
import type { Subscription } from "@/types/Subscription"

type SubscriptionStore = {
  isPro: boolean
  subscription: Optional<Subscription>
}

export const useSubscriptionStore = create<SubscriptionStore>(() => ({
  isPro: false,
  subscription: undefined,
}))

export function setSubscription(subscription: Nullish<Subscription>) {
  useSubscriptionStore.setState({
    isPro: subscription?.status === "active",
    subscription,
  })
}
