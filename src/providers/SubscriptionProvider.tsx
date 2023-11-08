"use client"

import { useEffect } from "react"
import { syncSubscription } from "@services/subscription"
import { setSubscription } from "@stores/subscription"
import { useSyncedUser } from "@stores/syncedUser"

export const SubscriptionProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const syncUser = useSyncedUser()

  useEffect(() => {
    if (syncUser) {
      return syncSubscription(syncUser.id, setSubscription)
    }
  }, [syncUser])

  return props.children
}
