import type { AvailableLanguages } from "./Language"
import type { Obtain } from "./Service"

export interface LanguageService {
  getAvailableLanguages: Obtain<AvailableLanguages>
}
