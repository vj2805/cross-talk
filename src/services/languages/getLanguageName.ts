import { getAvailableLanguagesMap } from "./getAvailableLanguagesMap"
import type { Language } from "@types"

const availableLanguagesMap = getAvailableLanguagesMap()

export function getLanguageName(languageCode: Language) {
  return availableLanguagesMap[languageCode]
}
