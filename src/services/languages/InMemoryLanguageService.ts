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

function getLanguageName(languageCode: Language) {
  return AVAILABLE_LANGUAGES_MAP[languageCode]
}

const NO_OF_LANGUAGES_IN_FREE = 2

function getNotSupportedLanguages(isPro: boolean) {
  return isPro ? [] : AVAILABLE_LANGUAGES.slice(NO_OF_LANGUAGES_IN_FREE)
}

function getSupportedLanguages(isPro: boolean) {
  return isPro
    ? AVAILABLE_LANGUAGES
    : AVAILABLE_LANGUAGES.slice(0, NO_OF_LANGUAGES_IN_FREE)
}

export default function createInMemoryLanguageService(): LanguageService {
  return {
    getLanguageName,
    getNotSupportedLanguages,
    getSupportedLanguages,
  }
}
