import { useSubscriptionStore } from "@/stores/subscription"

export function useSubscription() {
  return useSubscriptionStore(store => store.subscription)
}
