import { create } from "zustand"
import type { PricingTier } from "@services/pricing"

type PricingStore = {
  pricingTiers: Uncertain<PricingTier[]>
}

const usePricingStore = create<PricingStore>(() => ({
  pricingTiers: undefined,
}))

export function usePricingTiers() {
  return usePricingStore(store => store.pricingTiers)
}

export function setPricingTiers(pricingTiers: Uncertain<PricingTier[]>) {
  usePricingStore.setState({ pricingTiers })
}
