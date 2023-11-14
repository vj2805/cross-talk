import { default as pricingService } from "./internal/inmemory/pricing"
import type { PricingService } from "@/types/PricingService"

export const { getPricingTiers }: PricingService = pricingService
