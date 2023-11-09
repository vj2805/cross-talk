import type { Subscription } from "./Subscription"

export interface SubscriptionService {
  createCheckout: (
    userId: string,
    priceId: string,
    onSuccess: (url: string) => void,
    onFailure: (error: Error) => void,
    onDetach: () => void
  ) => Promise<void>
  manageSubscription: () => Promise<void>
  syncSubscription: (
    userId: string,
    onChange: (subscription: Nullish<Subscription>) => void
  ) => () => void
}
