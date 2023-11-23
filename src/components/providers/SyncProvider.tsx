"use client"

import { useSyncSubscription } from "@/hooks/useSyncSubscription"
import { useSyncUser } from "@/hooks/useSyncUser"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useSyncUser()
  useSyncSubscription()
  return props.children
}
