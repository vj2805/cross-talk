import { getAvailableLanguagesMap } from "./getAvailableLanguagesMap"
import type { Language } from "@types"

const availableLanguages = Object.keys(getAvailableLanguagesMap()) as Language[]

export function getAvailableLanguages() {
  return availableLanguages
}
