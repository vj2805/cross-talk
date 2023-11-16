import type { LANGUAGE_CODES } from "@/constants/languageCodes"

export type Language =
  | "English"
  | "French"
  | "German"
  | "Hindi"
  | "Japanese"
  | "Kannada"
  | "Malayalam"
  | "Spanish"
  | "Tamil"
  | "Telugu"

export type LanguageCode = (typeof LANGUAGE_CODES)[Language]

export type AvailableLanguages = {
  free: Language[]
  pro: Language[]
}
