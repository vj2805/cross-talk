import { useStore } from "@/stores/useStore"

export function useLanguages() {
  return useStore(state => state.language)
}
