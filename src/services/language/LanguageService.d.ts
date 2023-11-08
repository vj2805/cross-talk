import type { Language } from "@types"

export interface LanguageService {
  getLanguageCodes: () => Promise<Record<Language, string>>
  getLanguagesInFree: () => Promise<Language[]>
  getLanguagesOnlyInPro: () => Promise<Language[]>
}
