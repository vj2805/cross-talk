import { useLanguageStore } from "@/stores/language"

export function usePreferredLanguage() {
  return useLanguageStore(store => store.preferredLanguage)
}
