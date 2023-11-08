import type { Language } from "@types"
import type { LanguageService } from "./LanguageService"

const LANGUAGE_CODES: Record<Language, string> = {
  English: "en",
  French: "fr",
  German: "de",
  Hindi: "hi",
  Japanese: "ja",
  Kannada: "kn",
  Malayalam: "ml",
  Spanish: "es",
  Tamil: "ta",
  Telugu: "te",
}

const AVAILABLE_LANGUAGES = Object.keys(LANGUAGE_CODES) as Language[]

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
