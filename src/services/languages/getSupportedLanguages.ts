import { getAvailableLanguages } from "./getAvailableLanguages"

const availableLanguages = getAvailableLanguages()

export function getSupportedLanguages(isPro: boolean) {
  return isPro ? availableLanguages : availableLanguages.slice(0, 2)
}
