import { create } from "zustand"
import type { AvailableLanguages, Language } from "@/types/Language"

type LanguageStore = {
  availableLanguages: Optional<AvailableLanguages>
  preferredLanguage: Language
}

export const useLanguageStore = create<LanguageStore>(() => ({
  availableLanguages: undefined,
  preferredLanguage: "English",
}))

export function setAvailableLanguages(availableLanguages: AvailableLanguages) {
  useLanguageStore.setState({
    availableLanguages,
    preferredLanguage: availableLanguages.free[0],
  })
}

export function setPreferredLanguage(preferredLanguage: Language) {
  useLanguageStore.setState({ preferredLanguage })
}
