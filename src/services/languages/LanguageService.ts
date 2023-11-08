import type { Language } from "@types"

export default interface LanguageService {
  getLanguageName: (code: Language) => string
  getNotSupportedLanguages: (isPro: boolean) => Language[]
  getSupportedLanguages: (isPro: boolean) => Language[]
}
