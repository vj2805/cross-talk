import { create } from "zustand"
import type { Subscription } from "@/types/Subscription"

type SubscriptionStore = {
  isPro: Observable<boolean>
}

export const useSubscriptionStore = create<SubscriptionStore>(() => ({
  isPro: [undefined, "loading", undefined],
}))

export function setSubscription(subscription: Nullish<Subscription>) {
  useSubscriptionStore.setState({
    isPro: [subscription?.status === "active", "ready", undefined],
  })
}
