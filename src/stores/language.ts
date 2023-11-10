import { createWithEqualityFn } from "zustand/traditional"
import type { AvailableLanguages, Language } from "@/types/Language"

type LanguageStore = {
  availableLanguages: Observable<AvailableLanguages>
  preferredLanguage: Language
}

export const useLanguageStore = createWithEqualityFn<LanguageStore>(() => ({
  availableLanguages: { status: "loading" },
  preferredLanguage: "English",
}))

export function setAvailableLanguages(availableLanguages: AvailableLanguages) {
  useLanguageStore.setState({
    availableLanguages: { status: "idle", value: availableLanguages },
    preferredLanguage: availableLanguages.free[0],
  })
}

export function setPreferredLanguage(preferredLanguage: Language) {
  useLanguageStore.setState({ preferredLanguage })
}
