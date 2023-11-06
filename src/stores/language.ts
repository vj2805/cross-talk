import { create } from "zustand"
import type { Language } from "@types"

type LanguageStore = {
  language: Language
}

const useLanguageStore = create<LanguageStore>(() => ({
  language: "en",
}))

export function useLanguage() {
  return useLanguageStore(store => store.language)
}

export function setLanguage(language: Language) {
  useLanguageStore.setState({ language })
}
