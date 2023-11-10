export type Language = keyof typeof LANGUAGE_CODES

export type LanguageCode = (typeof LANGUAGE_CODES)[Language]

export const LANGUAGE_CODES = {
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
} as const

export const AVAILABLE_LANGUAGES = Object.keys(LANGUAGE_CODES) as Language[]

export type AvailableLanguages = {
  free: Language[]
  pro: Language[]
}
