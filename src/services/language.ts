import type {
  AvailableLanguages,
  Language,
  LanguageCode,
} from "@/types/Language"

const FREE_LANGUAGES_COUNT = 2

const CODES: Record<Language, LanguageCode> = {
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

const LANGUAGES: Language[] = Object.keys(CODES) as Language[]

export function getLanguageCode(language: Language): LanguageCode {
  return CODES[language]
}

export async function getAvailableLanguages(): Promise<AvailableLanguages> {
  return [
    LANGUAGES.slice(0, FREE_LANGUAGES_COUNT),
    LANGUAGES.slice(FREE_LANGUAGES_COUNT),
  ]
}
