import type { SupportedLanguage } from "@types"

const supportedLanguageMap: Record<SupportedLanguage, string> = {
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

export function getSupportedLanguageMap() {
  return supportedLanguageMap
}
