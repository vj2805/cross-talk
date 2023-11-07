"use client"

import { useEffect } from "react"
import { useUser } from "@hooks"
import { syncSubscription } from "@services"

export const SubscriptionProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const [syncUser] = useUser()

  useEffect(() => {
    if (syncUser) {
      return syncSubscription(syncUser.uid)
    }
  }, [syncUser])

  return props.children
}
