import type { Subscribe } from "./Service"
import type { Subscription } from "./Subscription"
import type { User } from "./User"

export interface SubscriptionService {
  syncSubscription: Subscribe<
    {
      userId: User["id"]
    },
    Nullish<Subscription>
  >
}
