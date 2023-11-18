import { default as subscriptionService } from "./internal/inmemory/subscription"
import type { SubscriptionService } from "@/types/SubscriptionService"

export const { syncSubscription }: SubscriptionService = subscriptionService
