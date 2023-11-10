import type { PriceTier } from "./PriceTier"

export interface PricingService {
  createCheckout: (userId: string, priceId: string) => Promise<string>
  getPricingTiers: () => Promise<PriceTier[]>
}
