"use client"

import { useSyncLanguages, useSyncSubscription, useSyncUser } from "@hooks"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useSyncUser()
  useSyncSubscription()
  useSyncLanguages()
  return props.children
}
