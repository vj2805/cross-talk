import { subscriptionService } from "@/backend"
import type { SubscriptionService } from "@/types/SubscriptionService"

export type { Subscription } from "@/types/Subscription"

export const { syncSubscription }: SubscriptionService = subscriptionService
