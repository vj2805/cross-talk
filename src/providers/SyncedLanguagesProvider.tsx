"use client"

import { useSyncLanguages } from "../hooks/useSyncLanguages"

export const SyncedLanguagesProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useSyncLanguages()
  return props.children
}
