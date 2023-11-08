import type { Language, LanguageCode } from "./Language"

export interface LanguageService {
  getLanguageCodes: () => Promise<Record<Language, LanguageCode>>
  getLanguagesInFree: () => Promise<Language[]>
  getLanguagesOnlyInPro: () => Promise<Language[]>
}
