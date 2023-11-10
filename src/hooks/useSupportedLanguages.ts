import { shallow } from "zustand/shallow"
import { useLanguageStore } from "@/stores/language"

export function useSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store => {
    if (!store.availableLanguages) {
      return undefined
    }
    return isPro
      ? [...store.availableLanguages.free, ...store.availableLanguages.pro]
      : store.availableLanguages.free
  }, shallow)
}
