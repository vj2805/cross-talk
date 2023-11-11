import { AVAILABLE_LANGUAGES } from "@/types/Language"
import type { LanguageService } from "@/types/LanguageService"

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
