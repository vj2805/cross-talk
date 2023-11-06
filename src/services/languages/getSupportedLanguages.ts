import { getSupportedLanguageMap } from "./getSupportedLanguageMap"

const supportedLanguages = Object.keys(getSupportedLanguageMap())

export function getSupportedLanguages() {
  return supportedLanguages
}
