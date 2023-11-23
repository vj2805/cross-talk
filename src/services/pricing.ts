import type { PricingService } from "@/types/PricingService"
import { default as pricingService } from "./internal/inmemory/pricing"

export const { getPricingTiers }: PricingService = pricingService
