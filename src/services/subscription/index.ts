import createSubscriptionService from "@/backend/local-storage/LocalStorageSubscriptionService"
import type { SubscriptionService } from "@/types/SubscriptionService"

export type { CheckoutError, CheckoutErrorCode } from "@/errors/CheckoutError"
export type { Subscription } from "@/types/Subscription"

export const { createCheckout, syncSubscription }: SubscriptionService =
  createSubscriptionService()
