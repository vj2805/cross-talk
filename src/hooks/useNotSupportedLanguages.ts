import { shallow } from "zustand/shallow"
import { useLanguageStore } from "@/stores/language"

export function useNotSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store => {
    if (!store.availableLanguages) {
      return undefined
    }
    return isPro ? [] : store.availableLanguages.pro
  }, shallow)
}
