import type { Language } from "@types"

export interface LanguageService {
  getLanguageNames: () => Promise<Record<Language, string>>
  getLanguagesInFree: () => Promise<Language[]>
  getLanguagesOnlyInPro: () => Promise<Language[]>
}
