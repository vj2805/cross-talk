import createInMemoryLanguageService from "./InMemoryLanguageService"
import type { LanguageService } from "./LanguageService"

export const {
  getLanguageCodes,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
}: LanguageService = createInMemoryLanguageService()
