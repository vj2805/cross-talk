import type { LanguageService } from "@/types/LanguageService"
import { default as languageService } from "./internal/inmemory/language"

export const { getAvailableLanguages }: LanguageService = languageService
