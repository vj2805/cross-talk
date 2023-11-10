import createInMemoryLanguageService from "@/backend/inmemory/InMemoryLanguageService"
import type { LanguageService } from "@/types/LanguageService"

export type { Language, LanguageCode } from "@/types/Language"

export const {
  getLanguageCodes,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
}: LanguageService = createInMemoryLanguageService()
