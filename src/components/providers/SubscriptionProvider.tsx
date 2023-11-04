"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { onSnapshot } from "firebase/firestore"
import { subscriptionsRef } from "@/services/collections/subscriptionsRef"
import { createContext } from "@/services/createContext"

const [SubscriptionContextProvider, useSubscription] =
  createContext("Subscription")

export const SubscriptionProvider: React.FC = () => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session?.user) {
      return
    }
    return onSnapshot(subscriptionsRef(session.user.id), snapshot => {
      if (snapshot.empty) {
      }
    })
  }, [session])

  return <div>SubscriptionProvider</div>
}
