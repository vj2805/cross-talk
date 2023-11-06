import { create } from "zustand"
import type { Subscription } from "@types"

type SubscriptionStore = {
  isPro: Uncertain<boolean>
  subscription: Optional<Subscription>
}

const useSubscriptionStore = create<SubscriptionStore>(() => ({
  isPro: undefined,
  subscription: undefined,
}))

export function useSubscription() {
  return useSubscriptionStore(store => store.subscription)
}

export function useIsPro() {
  return useSubscriptionStore(store => store.isPro)
}

export function setSubscription(subscription: Nullish<Subscription>) {
  useSubscriptionStore.setState({
    isPro: subscription?.status === "active",
    subscription,
  })
}
