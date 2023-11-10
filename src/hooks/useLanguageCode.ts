import { useLanguageStore } from "@/stores/language"
import type { Language } from "@/types/Language"

export function useLanguageCode(language: Language) {
  return useLanguageStore(store => store.languageCodes?.[language])
}
