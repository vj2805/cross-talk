import { shallow } from "zustand/shallow"
import { useLanguageStore } from "@/stores/language"

export function useSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store => {
    if (store.availableLanguages.status !== "idle") {
      return undefined
    }
    if (!store.availableLanguages.value) {
      return undefined
    }
    return isPro
      ? [
          ...store.availableLanguages.value.free,
          ...store.availableLanguages.value.pro,
        ]
      : store.availableLanguages.value.free
  }, shallow)
}
