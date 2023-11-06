import type { Language } from "@types"

const availableLanguagesMap: Record<Language, string> = {
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

export function getAvailableLanguagesMap() {
  return availableLanguagesMap
}
