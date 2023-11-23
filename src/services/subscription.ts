import type { SubscriptionService } from "@/types/SubscriptionService"
import { default as subscriptionService } from "./internal/firebase/subscription"

export const { syncSubscription }: SubscriptionService = subscriptionService
