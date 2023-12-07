"use client"

import { useEffect, useRef, useState } from "react"
import type { User } from "next-auth"
import { useSession } from "next-auth/react"
import { syncIsPro } from "@/services/subscription"
import { syncUser } from "@/services/user"
import { setError, setIsPro, setLoading } from "@/stores/useStore"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const { data: session, status } = useSession()
  const [user, setUser] = useState<User | null>(null)

  const isFirstMount = useRef(true)

  // Syncing user
  useEffect(() => {
    syncUser(session).then(setUser)
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
