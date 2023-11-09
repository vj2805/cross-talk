"use client"

import { useSyncLanguages } from "@hooks/language"
import { useSyncSubscription } from "@hooks/subscription"
import { useSyncUser } from "@hooks/user"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useSyncUser()
  useSyncSubscription()
  useSyncLanguages()
  return props.children
}
