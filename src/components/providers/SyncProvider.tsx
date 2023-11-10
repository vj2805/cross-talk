"use client"

import { useSyncLanguages } from "@/hooks/useSyncLanguages"
import { useSyncSubscription } from "@/hooks/useSyncSubscription"
import { useSyncUser } from "@/hooks/useSyncUser"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useSyncUser()
  useSyncSubscription()
  useSyncLanguages()
  return props.children
}
