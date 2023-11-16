import type { Language } from "@/types/Language"

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
} as const satisfies Record<Language, string>
