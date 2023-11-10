import { useLanguageStore } from "@/stores/language"

export function useNotSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store => (isPro ? [] : store.languagesOnlyInPro))
}
