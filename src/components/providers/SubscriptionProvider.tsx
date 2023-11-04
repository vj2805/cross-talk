"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { onSnapshot } from "firebase/firestore"
import { subscriptionsRef } from "@/services/collections/subscriptionsRef"
import { useUser } from "@/hooks/useUser"
import type { Subscription } from "@/types/Subscription"

const SubscriptionContext = createContext<Optional<Subscription>>(undefined)

export const useSubscription = () => useContext(SubscriptionContext)

export const SubscriptionProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const [subscription, setSubscription] =
    useState<Optional<Subscription>>(undefined)
  const [syncUser] = useUser()

  useEffect(() => {
    if (syncUser) {
      return onSnapshot(subscriptionsRef(syncUser.uid), snapshot => {
        if (snapshot.empty) {
          setSubscription(null)
        } else {
          setSubscription(snapshot.docs[0].data())
        }
      })
    }
  }, [syncUser])

  return (
    <SubscriptionContext.Provider value={subscription}>
      {props.children}
    </SubscriptionContext.Provider>
  )
}
