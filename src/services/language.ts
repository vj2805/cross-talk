import { languagesQuota } from "@/configs/quota"
import type {
  AvailableLanguages,
  Language,
  LanguageCode,
} from "@/types/Language"

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

export function getAvailableLanguages(): AvailableLanguages {
  return [LANGUAGES.slice(0, languagesQuota), LANGUAGES.slice(languagesQuota)]
}
