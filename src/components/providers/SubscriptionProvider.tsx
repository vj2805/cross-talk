"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { onSnapshot } from "firebase/firestore"
import { subscriptionsRef } from "@/services/collections/subscriptionsRef"
import { setSubscription } from "@/stores/subscription"

export const SubscriptionProvider: React.FC<
  React.PropsWithRequiredChildren
> = ({ children }) => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session?.user) {
      return
    }
    return onSnapshot(
      subscriptionsRef(session.user.id),
      snapshot => {
        if (snapshot.empty) {
          setSubscription(null)
        } else {
          setSubscription(snapshot.docs[0].data())
        }
      },
      console.error
    )
  }, [session])

  return <>{children}</>
}
