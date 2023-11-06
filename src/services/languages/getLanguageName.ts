import { getSupportedLanguageMap } from "./getSupportedLanguageMap"
import type { SupportedLanguage } from "@types"

const supportedLanguageMap = getSupportedLanguageMap()

export function getLanguageName(languageCode: SupportedLanguage) {
  return supportedLanguageMap[languageCode]
}
