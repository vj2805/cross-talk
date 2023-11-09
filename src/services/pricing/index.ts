import createPricingService from "./InMemoryPricingService"
import type { PricingService } from "./PricingService"

export type { PricingTier } from "./PricingTier"

export const { getPricingTiers }: PricingService = createPricingService()
