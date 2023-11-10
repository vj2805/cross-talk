import { useEffect } from "react"
import {
  getLanguageCodes,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
} from "@/services/language"
import {
  setLanguageCodes,
  setLanguagesInFree,
  setLanguagesOnlyInPro,
} from "@/stores/language"

async function fetchLanguageNames() {
  setLanguageCodes(await getLanguageCodes())
}

async function fetchLanguagesInFree() {
  setLanguagesInFree(await getLanguagesInFree())
}

async function fetchLanguagesOnlyInPro() {
  setLanguagesOnlyInPro(await getLanguagesOnlyInPro())
}

export function useSyncLanguages() {
  useEffect(() => {
    Promise.allSettled([
      fetchLanguageNames(),
      fetchLanguagesInFree(),
      fetchLanguagesOnlyInPro(),
    ])
  }, [])
}
