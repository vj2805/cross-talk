import type { PriceTier } from "./PriceTier"
import type { Obtain } from "./Service"

export interface PricingService {
  getPricingTiers: Obtain<PriceTier[]>
}
