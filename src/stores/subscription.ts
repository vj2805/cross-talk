import { create } from "zustand"
import type { PricingTier } from "@services/pricing"
import type { Subscription } from "@services/subscription"

type SubscriptionStore = {
  isPro: boolean
  pricingTiers: Uncertain<PricingTier[]>
  subscription: Optional<Subscription>
}

const useSubscriptionStore = create<SubscriptionStore>(() => ({
  isPro: false,
  pricingTiers: undefined,
  subscription: undefined,
}))

export function useSubscription() {
  return useSubscriptionStore(store => store.subscription)
}

export function useIsPro() {
  return useSubscriptionStore(store => store.isPro)
}

export function usePricingTiers() {
  return useSubscriptionStore(store => store.pricingTiers)
}

export function setSubscription(subscription: Nullish<Subscription>) {
  useSubscriptionStore.setState({
    isPro: subscription?.status === "active",
    subscription,
  })
}

export function setPricingTiers(pricingTiers: Uncertain<PricingTier[]>) {
  useSubscriptionStore.setState({ pricingTiers })
}
