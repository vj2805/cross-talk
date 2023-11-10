import { shallow } from "zustand/shallow"
import { useLanguageStore } from "@/stores/language"

export function useNotSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store => {
    if (store.availableLanguages.status !== "idle") {
      return undefined
    }
    if (!store.availableLanguages.value) {
      return undefined
    }
    return isPro ? [] : store.availableLanguages.value.pro
  }, shallow)
}
