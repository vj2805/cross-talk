import { languagesQuota } from "@/configs/quota"
import type { Language, LanguageCode } from "@/types/Language"

const LANGUAGE_CODES: Record<Language, LanguageCode> = {
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

const LANGUAGES: Language[] = Object.keys(LANGUAGE_CODES) as Language[]

const LANGUAGES_IN_FREE = LANGUAGES.slice(0, languagesQuota)

const LANGUAGES_IN_PRO = LANGUAGES.slice(languagesQuota)

function getSupportedLanguages(isPro: boolean) {
  return isPro ? [...LANGUAGES_IN_FREE, ...LANGUAGES_IN_PRO] : LANGUAGES_IN_FREE
}

function getUnsupportedLanguages(isPro: boolean) {
  return isPro ? [] : LANGUAGES_IN_PRO
}

export function getAvailableLanguages(isPro: boolean) {
  const supported = getSupportedLanguages(isPro)
  const unsupported = getUnsupportedLanguages(isPro)
  return [supported, unsupported] as const
}

export function getLanguageCode(language: Language): LanguageCode {
  return LANGUAGE_CODES[language]
}
