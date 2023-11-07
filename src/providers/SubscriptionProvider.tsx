"use client"

import { useEffect } from "react"
import { setSubscription } from "@stores"
import { useUser } from "@hooks"
import { syncSubscription } from "@services"

export const SubscriptionProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const [syncUser] = useUser()

  useEffect(() => {
    if (syncUser) {
      return syncSubscription(syncUser.uid, snapshot => {
        setSubscription(snapshot.empty ? null : snapshot.docs[0].data())
      })
    }
  }, [syncUser])

  return props.children
}
