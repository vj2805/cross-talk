import type { PricingTier } from "../pricing/PricingTier"
import type { Subscription } from "./Subscription"

export interface SubscriptionService {
  getPricingTiers: () => Promise<PricingTier[]>
  syncSubscription: (
    userId: string,
    onChange: (subscription: Nullish<Subscription>) => void
  ) => () => void
}
