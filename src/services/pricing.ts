import { pricingService } from "@/backend"
import type { PricingService } from "@/types/PricingService"

export type { PriceTier as PricingTier } from "@/types/PriceTier"

export const { getPricingTiers }: PricingService = pricingService
