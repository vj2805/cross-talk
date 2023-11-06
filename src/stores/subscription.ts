import { create } from "zustand"
import type { Subscription } from "@types"

type SubscriptionStore = {
  isPro: boolean
  subscription: Optional<Subscription>
}

const useSubscriptionStore = create<SubscriptionStore>(() => ({
  isPro: false,
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
