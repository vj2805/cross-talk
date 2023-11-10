import createPricingService from "@/backend/inmemory/InMemoryPricingService"
import type { PricingService } from "@/types/PricingService"

export type { PriceTier as PricingTier } from "@/types/PriceTier"

export const { getPricingTiers }: PricingService = createPricingService()
