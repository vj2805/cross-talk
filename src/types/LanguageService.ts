import type { AvailableLanguages } from "./Language"

export interface LanguageService {
  getAvailableLanguages: () => Promise<AvailableLanguages>
}
