import { useLanguageStore } from "@/stores/language"

export function useSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store =>
    isPro ? store.availableLanguages : store.languagesInFree
  )
}
