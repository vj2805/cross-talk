import { getLanguageCode } from "@/services/language"
import type { Language } from "@/types/Language"
import type { PreferredLanguage } from "@/types/PreferredLanguage"
import { getTranslation } from "./translations"

export function createPreferredLanguage(language: Language): PreferredLanguage {
  return {
    code: getLanguageCode(language),
    name: language,
    translate(phase) {
      return getTranslation(phase, this.name)
    },
  }
}
