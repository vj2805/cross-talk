import { create } from "zustand"
import type { Language } from "@types"

type LanguageStore = {
  availableLanguages: Uncertain<Language[]>
  languageNames: Uncertain<Record<Language, string>>
  languagesInFree: Uncertain<Language[]>
  languagesOnlyInPro: Uncertain<Language[]>
  preferredLanguage: Language
}

const useLanguageStore = create<LanguageStore>(() => ({
  availableLanguages: undefined,
  languageNames: undefined,
  languagesInFree: undefined,
  languagesOnlyInPro: undefined,
  preferredLanguage: "en",
}))

export function usePreferredLanguage() {
  return useLanguageStore(store => store.preferredLanguage)
}

export function useLanguageName(language: Language) {
  return useLanguageStore(store => store.languageNames?.[language])
}

export function useSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store =>
    isPro ? store.availableLanguages : store.languagesInFree
  )
}

export function useNotSupportedLanguages(isPro: boolean) {
  return useLanguageStore(store => (isPro ? [] : store.languagesOnlyInPro))
}

export function setLanguageNames(languageNames: Record<Language, string>) {
  useLanguageStore.setState({
    availableLanguages: Object.keys(languageNames) as Language[],
    languageNames,
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
