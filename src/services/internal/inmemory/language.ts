import { getAvailableLanguages } from "@/utilities/languages"
import type { LanguageService } from "@/types/LanguageService"

const NO_OF_LANGUAGES_IN_FREE = 2

const inMemoryLanguageService: LanguageService = {
  async getAvailableLanguages() {
    return {
      free: getAvailableLanguages().slice(0, NO_OF_LANGUAGES_IN_FREE),
      pro: getAvailableLanguages().slice(NO_OF_LANGUAGES_IN_FREE),
    }
  },
}

export default inMemoryLanguageService
