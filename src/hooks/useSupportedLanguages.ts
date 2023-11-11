import { shallow } from "zustand/shallow"
import { useLanguageStore } from "@/stores/language"

export function useSupportedLanguages(isPro: boolean) {
  return useLanguageStore(
    ({ availableLanguages }) =>
      !availableLanguages
        ? undefined
        : availableLanguages.free.concat(isPro ? availableLanguages.pro : []),
    shallow
  )
}
