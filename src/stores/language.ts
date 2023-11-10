import { create } from "zustand"
import type { Language, LanguageCode } from "@/types/Language"

type LanguageStore = {
  availableLanguages: Uncertain<Language[]>
  languageCodes: Uncertain<Record<Language, LanguageCode>>
  languagesInFree: Uncertain<Language[]>
  languagesOnlyInPro: Uncertain<Language[]>
  preferredLanguage: Language
}

const useLanguageStore = create<LanguageStore>(() => ({
  availableLanguages: undefined,
  languageCodes: undefined,
  languagesInFree: undefined,
  languagesOnlyInPro: undefined,
  preferredLanguage: "English",
}))

export function useLanguageCode(language: Language) {
  return useLanguageStore(store => store.languageCodes?.[language])
}

export function useSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store =>
    isPro ? store.availableLanguages : store.languagesInFree
  )
}

export function useNotSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store => (isPro ? [] : store.languagesOnlyInPro))
}

export function usePreferredLanguage() {
  return useLanguageStore(store => store.preferredLanguage)
}

export function setLanguageCodes(
  languageCodes: Record<Language, LanguageCode>
) {
  useLanguageStore.setState({
    availableLanguages: Object.keys(languageCodes) as Language[],
    languageCodes,
  })
}

export function setLanguagesInFree(languagesInFree: Language[]) {
  useLanguageStore.setState({ languagesInFree })
}

export function setLanguagesOnlyInPro(languagesOnlyInPro: Language[]) {
  useLanguageStore.setState({ languagesOnlyInPro })
}

export function setPreferredLanguage(preferredLanguage: Language) {
  useLanguageStore.setState({ preferredLanguage })
}
