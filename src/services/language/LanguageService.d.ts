import type { Language } from "./Language"

export interface LanguageService {
  getLanguageCodes: () => Promise<Record<Language, string>>
  getLanguagesInFree: () => Promise<Language[]>
  getLanguagesOnlyInPro: () => Promise<Language[]>
}
