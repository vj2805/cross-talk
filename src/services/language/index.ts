import createInMemoryLanguageService from "./InMemoryLanguageService"
import type { LanguageService } from "./LanguageService"

export const {
  getLanguageNames,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
}: LanguageService = createInMemoryLanguageService()
