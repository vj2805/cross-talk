import createInMemoryLanguageService from "./InMemoryLanguageService"
import type { LanguageService } from "./LanguageService"

export type { Language, LanguageCode } from "./Language"

export const {
  getLanguageCodes,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
}: LanguageService = createInMemoryLanguageService()
