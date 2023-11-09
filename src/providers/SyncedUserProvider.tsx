"use client"

import { useSyncUser } from "../hooks/useSyncUser"

export const SyncedUserProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useSyncUser()
  return props.children
}
