import { LANGUAGE_CODES } from "@/types/Language"
import type { Language } from "@/types/Language"

export function getLanguageCode(language: Language) {
  return LANGUAGE_CODES[language]
}
