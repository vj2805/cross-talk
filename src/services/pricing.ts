import { pricingService } from "./internal"
import type { PricingService } from "@/types/PricingService"

export const { getPricingTiers }: PricingService = pricingService
