import type { LanguageService } from "@/types/LanguageService"
import { getAvailableLanguages as getAllAvailableLanguages } from "@/utilities/languages"

const NO_OF_LANGUAGES_IN_FREE = 2

export const { getAvailableLanguages }: LanguageService = {
  async getAvailableLanguages() {
    return {
      free: getAllAvailableLanguages().slice(0, NO_OF_LANGUAGES_IN_FREE),
      pro: getAllAvailableLanguages().slice(NO_OF_LANGUAGES_IN_FREE),
    }
  },
}
