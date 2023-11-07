"use client"

import { useEffect } from "react"
import { useSyncedUser } from "@stores"
import { syncSubscription } from "@services"

export const SubscriptionProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const syncUser = useSyncedUser()

  useEffect(() => {
    if (syncUser) {
      return syncSubscription(syncUser.id)
    }
  }, [syncUser])

  return props.children
}
