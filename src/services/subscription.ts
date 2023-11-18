import { default as subscriptionService } from "./internal/firebase/subscription"
import type { SubscriptionService } from "@/types/SubscriptionService"

export const { syncSubscription }: SubscriptionService = subscriptionService
