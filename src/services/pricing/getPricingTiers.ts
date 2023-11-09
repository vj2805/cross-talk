import { pricingTiers } from "../subscription/InMemorySubscriptionService"
import type { SubscriptionService } from "../subscription/SubscriptionService"

export const getPricingTiers: SubscriptionService["getPricingTiers"] =
  async () => {
    return pricingTiers
  }
