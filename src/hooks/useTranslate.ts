import { useCallback } from "react"
import { getTranslation } from "@/utilities/translations"
import { usePreferredLanguage } from "./usePreferredLanguage"

export function useTranslate() {
  const language = usePreferredLanguage()
  const translate = useCallback(
    (key: Parameters<typeof getTranslation>[0]) =>
      getTranslation(key, language),
    [language]
  )
  return translate
}
