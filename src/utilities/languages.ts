import type { Language } from "@/types/Language"

const LANGUAGE_CODES = {
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
} as const satisfies Record<Language, string>

const AVAILABLE_LANGUAGES = Object.keys(LANGUAGE_CODES) as Language[]

export function getAvailableLanguages() {
  return AVAILABLE_LANGUAGES
}

export function getLanguageCode(language: Language) {
  return LANGUAGE_CODES[language]
}
