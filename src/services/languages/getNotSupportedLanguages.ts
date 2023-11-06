import { getAvailableLanguages } from "./getAvailableLanguages"

const availableLanguages = getAvailableLanguages()

export function getNotSupportedLanguages(isPro: string) {
  return isPro ? [] : availableLanguages.slice(2)
}
