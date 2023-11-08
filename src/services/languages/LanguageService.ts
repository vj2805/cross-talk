import type { Language } from "@types"

export interface LanguageService {
  getLanguageName: (code: Language) => string
  getNotSupportedLanguages: (isPro: boolean) => Language[]
  getSupportedLanguages: (isPro: boolean) => Language[]
}
