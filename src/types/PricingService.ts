import type { Obtain } from "./Service"
import type { PriceTier } from "./PriceTier"

export interface PricingService {
  getPricingTiers: Obtain<PriceTier[]>
}
