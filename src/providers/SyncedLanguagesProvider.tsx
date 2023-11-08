"use client"

import { useEffect } from "react"
import {
  getLanguageCodes,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
} from "@services/language"
import {
  setLanguageCodes,
  setLanguagesInFree,
  setLanguagesOnlyInPro,
} from "@stores/language"

export const SyncedLanguagesProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useEffect(() => {
    async function fetchLanguageNames() {
      setLanguageCodes(await getLanguageCodes())
    }
    async function fetchLanguagesInFree() {
      setLanguagesInFree(await getLanguagesInFree())
    }
    async function fetchLanguagesOnlyInPro() {
      setLanguagesOnlyInPro(await getLanguagesOnlyInPro())
    }
    Promise.allSettled([
      fetchLanguageNames(),
      fetchLanguagesInFree(),
      fetchLanguagesOnlyInPro(),
    ])
  }, [])
  return props.children
}
