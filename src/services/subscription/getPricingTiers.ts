import { pricingTiers } from "./InMemorySubscriptionService"
import type { SubscriptionService } from "./SubscriptionService"

export const getPricingTiers: SubscriptionService["getPricingTiers"] =
  async () => {
    return pricingTiers
  }
