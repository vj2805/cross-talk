import { AVAILABLE_LANGUAGES, LANGUAGE_CODES } from "@/types/Language"
import type { LanguageService } from "@/types/LanguageService"

const NO_OF_LANGUAGES_IN_FREE = 2

const inMemoryLanguageService: LanguageService = {
  async getLanguageCodes() {
    return LANGUAGE_CODES
  },
  async getLanguagesInFree() {
    return AVAILABLE_LANGUAGES.slice(0, NO_OF_LANGUAGES_IN_FREE)
  },
  async getLanguagesOnlyInPro() {
    return AVAILABLE_LANGUAGES.slice(NO_OF_LANGUAGES_IN_FREE)
  },
}

export default inMemoryLanguageService
