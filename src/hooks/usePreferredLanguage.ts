import { useStore } from "@/stores/useStore"

export function usePreferredLanguage() {
  return useStore(state => state.language.preferred)
}
