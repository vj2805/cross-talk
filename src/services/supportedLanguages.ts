export type SupportedLanguage =
  | "de"
  | "en"
  | "es"
  | "fr"
  | "hi"
  | "ja"
  | "kn"
  | "ml"
  | "ta"
  | "te"

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

const supportedLanguages = Object.keys(supportedLanguageMap)

export function getSupportedLanguages() {
  return supportedLanguages
}

export function getLanguageName(languageCode: SupportedLanguage) {
  return supportedLanguageMap[languageCode]
}