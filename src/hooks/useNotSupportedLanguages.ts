import { shallow } from "zustand/shallow"
import { useLanguageStore } from "@/stores/language"

export function useNotSupportedLanguages(isPro: boolean) {
  return useLanguageStore(
    ({ availableLanguages }) =>
      !availableLanguages ? undefined : isPro ? [] : availableLanguages.pro,
    shallow
  )
}
