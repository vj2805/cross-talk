import { useSubscriptionStore } from "./subscription"

export function useIsPro() {
  return useSubscriptionStore(store => store.isPro)
}
