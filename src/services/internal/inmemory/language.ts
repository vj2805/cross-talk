import { LANGUAGE_CODES } from "@/constants/languageCodes"
import type { Language } from "@/types/Language"
import type { LanguageService } from "@/types/LanguageService"

const AVAILABLE_LANGUAGES = Object.keys(LANGUAGE_CODES) as Language[]

const NO_OF_LANGUAGES_IN_FREE = 2

const inMemoryLanguageService: LanguageService = {
  async getAvailableLanguages() {
    return {
      free: AVAILABLE_LANGUAGES.slice(0, NO_OF_LANGUAGES_IN_FREE),
      pro: AVAILABLE_LANGUAGES.slice(NO_OF_LANGUAGES_IN_FREE),
    }
  },
}

export default inMemoryLanguageService
