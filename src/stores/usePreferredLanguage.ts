import { useLanguageStore } from "./language"

export function usePreferredLanguage() {
  return useLanguageStore(store => store.preferredLanguage)
}
