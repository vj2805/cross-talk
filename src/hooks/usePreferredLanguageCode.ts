import { useLanguageStore } from "@/stores/language"
import { getLanguageCode } from "@/utilities/languages"

export function usePreferredLanguageCode() {
  return useLanguageStore(store => getLanguageCode(store.preferredLanguage))
}
