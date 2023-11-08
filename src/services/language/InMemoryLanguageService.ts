import type { Language } from "@types"
import type { LanguageService } from "./LanguageService"

const AVAILABLE_LANGUAGES_MAP: Record<Language, string> = {
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
  hi: "Hindi",
  ja: "Japanese",
  kn: "Kannada",
  ml: "Malayalam",
  ta: "Tamil",
  te: "Telugu",
}

const AVAILABLE_LANGUAGES = Object.keys(AVAILABLE_LANGUAGES_MAP) as Language[]

const getLanguageNames: LanguageService["getLanguageNames"] = async () => {
  return AVAILABLE_LANGUAGES_MAP
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
    getLanguageNames,
    getLanguagesInFree,
    getLanguagesOnlyInPro,
  }
}
