import type { PriceTier } from "./PriceTier"

export interface PricingService {
  getPricingTiers: () => Promise<PriceTier[]>
}
