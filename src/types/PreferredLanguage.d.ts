import type { Language, LanguageCode } from "./Language"
import type { Phrase } from "./Phrase"

export interface PreferredLanguage {
  code: LanguageCode
  name: Language
  translate: (phase: Phrase) => string
}
