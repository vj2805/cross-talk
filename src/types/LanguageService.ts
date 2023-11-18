import type { Obtain } from "./Service"
import type { AvailableLanguages } from "./Language"

export interface LanguageService {
  getAvailableLanguages: Obtain<AvailableLanguages>
}
