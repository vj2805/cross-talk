import type { PricingTier } from "./PricingTier"

export interface PricingService {
  getPricingTiers: () => Promise<PricingTier[]>
}
