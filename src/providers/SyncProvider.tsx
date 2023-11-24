"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { syncIsPro } from "@/services/subscription"
import { syncUser } from "@/services/user"
import { setError, setIsPro, setLoading } from "@/stores/useStore"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const { data: session, status } = useSession()

  // Syncing user
  useEffect(() => {
    syncUser(session)
  }, [session])

  // Syncing subscription
  useEffect(() => {
    if (status === "loading") {
      return setLoading()
    }
    if (!session?.user) {
      return setIsPro(false)
    }
    return syncIsPro(session.user.id, setIsPro, setError)
  }, [session, status])

  return props.children
}
