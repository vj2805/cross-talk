import { pricingService } from "@/backend"
import type { PricingService } from "@/types/PricingService"

export const { getPricingTiers }: PricingService = pricingService
