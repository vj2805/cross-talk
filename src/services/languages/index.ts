import createInMemoryLanguageService from "./InMemoryLanguageService"
import type LanguageService from "./LanguageService"

export const {
  getLanguageName,
  getNotSupportedLanguages,
  getSupportedLanguages,
}: LanguageService = createInMemoryLanguageService()
