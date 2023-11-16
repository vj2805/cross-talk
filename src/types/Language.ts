import type { getLanguageCode } from "@/constants/languages"

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

export type LanguageCode = ReturnType<typeof getLanguageCode>

export type AvailableLanguages = {
  free: Language[]
  pro: Language[]
}
