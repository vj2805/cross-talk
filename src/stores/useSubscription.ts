import { useSubscriptionStore } from "./subscription"

export function useSubscription() {
  return useSubscriptionStore(store => store.subscription)
}
