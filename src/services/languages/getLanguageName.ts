import { supportedLanguageMap } from "./getSupportedLanguageMap"
import type { SupportedLanguage } from "@types"

export function getLanguageName(languageCode: SupportedLanguage) {
  return supportedLanguageMap[languageCode]
}
