"use client"

import { useEffect } from "react"
import {
  getLanguageNames,
  getLanguagesInFree,
  getLanguagesOnlyInPro,
} from "@services/language"
import {
  setLanguageNames,
  setLanguagesInFree,
  setLanguagesOnlyInPro,
} from "@stores/language"

export const SyncedLanguagesProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useEffect(() => {
    async function fetchLanguageNames() {
      setLanguageNames(await getLanguageNames())
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
