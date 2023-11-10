import { languageService } from "@/backend"
import type { LanguageService } from "@/types/LanguageService"

export const {
  getLanguageCodes,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
}: LanguageService = languageService
