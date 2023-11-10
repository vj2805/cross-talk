import { useEffect } from "react"
import { getAvailableLanguages } from "@/services/language"
import { setAvailableLanguages } from "@/stores/language"

export function useSyncLanguages() {
  useEffect(() => {
    getAvailableLanguages().then(setAvailableLanguages)
  }, [])
}
