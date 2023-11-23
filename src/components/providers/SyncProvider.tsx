"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { syncSubscription } from "@/services/subscription"
import { syncUser } from "@/services/user"
import { setIsPro, setLoading } from "@/stores/store"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const { data: session, status } = useSession()

  // Syncing user
  useEffect(() => {
    syncUser({ session })
  }, [session])

  // Syncing subscription
  useEffect(() => {
    if (status === "loading") {
      return setLoading()
    }
    if (!session?.user) {
      return setIsPro(false)
    }
    return syncSubscription({ userId: session.user.id }, subscription =>
      setIsPro(subscription?.status === "active")
    )
  }, [session, status])

  return props.children
}
