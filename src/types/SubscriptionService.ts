import type { OnChangeHandler } from "./OnChangeHandler"
import type { User } from "./User"
import type { Unsubscribe } from "./Unsubscribe"
import type { Subscription } from "./Subscription"

export interface SubscriptionService {
  syncSubscription: (
    userId: User["id"],
    onChange: OnChangeHandler<Nullish<Subscription>>
  ) => Unsubscribe
}
