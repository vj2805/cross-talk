import type { PricingTier, Subscription } from "@types"

export interface SubscriptionService {
  getPricingTiers: () => Promise<PricingTier[]>
  syncSubscription: (
    userId: string,
    onChange: (subscription: Nullish<Subscription>) => void
  ) => () => void
}
