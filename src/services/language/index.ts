import createInMemoryLanguageService from "./InMemoryLanguageService"
import type { LanguageService } from "./LanguageService"

export type { Language } from "./Language"

export const {
  getLanguageCodes,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
}: LanguageService = createInMemoryLanguageService()
