import { default as languageService } from "./internal/inmemory/language"
import type { LanguageService } from "@/types/LanguageService"

export const { getAvailableLanguages }: LanguageService = languageService
