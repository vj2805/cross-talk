import { languageService } from "@/backend"
import type { LanguageService } from "@/types/LanguageService"

export const { getAvailableLanguages }: LanguageService = languageService
