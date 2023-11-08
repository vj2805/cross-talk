import type { Language } from "@types"

export interface LanguageService {
  getLanguageName: (code: Language) => Promise<string>
  getNotSupportedLanguages: (isPro: boolean) => Promise<Language[]>
  getSupportedLanguages: (isPro: boolean) => Promise<Language[]>
}
