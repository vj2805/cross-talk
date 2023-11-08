import type { PricingTier, Subscription } from "@types"

export interface SubscriptionService {
  getPricingTiers: () => Promise<PricingTier[]>
  getSubscription: (userId: string) => Promise<Nullish<Subscription>>
}
