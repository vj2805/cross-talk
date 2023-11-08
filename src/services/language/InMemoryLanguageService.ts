import { AVAILABLE_LANGUAGES, LANGUAGE_CODES } from "./Language"
import type { LanguageService } from "./LanguageService"

const getLanguageCodes: LanguageService["getLanguageCodes"] = async () => {
  return LANGUAGE_CODES
}

const NO_OF_LANGUAGES_IN_FREE = 2

const getLanguagesInFree: LanguageService["getLanguagesInFree"] = async () => {
  return AVAILABLE_LANGUAGES.slice(0, NO_OF_LANGUAGES_IN_FREE)
}

const getLanguagesOnlyInPro: LanguageService["getLanguagesOnlyInPro"] =
  async () => {
    return AVAILABLE_LANGUAGES.slice(0, NO_OF_LANGUAGES_IN_FREE)
  }

export default function createInMemoryLanguageService(): LanguageService {
  return {
    getLanguageCodes,
    getLanguagesInFree,
    getLanguagesOnlyInPro,
  }
}
