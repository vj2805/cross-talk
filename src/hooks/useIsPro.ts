import { useStore } from "@/stores/useStore"

export function useIsPro() {
  return useStore(state => state.subscription.isPro)
}
