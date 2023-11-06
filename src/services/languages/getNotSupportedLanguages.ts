import { getAvailableLanguages } from "./getAvailableLanguages"

const availableLanguages = getAvailableLanguages()

export function getNotSupportedLanguages(isPro: boolean) {
  return isPro ? [] : availableLanguages.slice(2)
}
