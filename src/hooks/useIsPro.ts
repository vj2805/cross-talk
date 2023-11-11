import { useSubscriptionStore } from "@/stores/subscription"

export function useIsPro() {
  return useSubscriptionStore(store => store.subscription?.status === "active")
}
