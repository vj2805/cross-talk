"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { syncSessionWithAuth } from "@/services/syncSessionWithAuth"

interface SyncSessionWithAuthProviderProps {
  children: React.ReactNode
}

export const SyncSessionWithAuthProvider: React.FC<
  SyncSessionWithAuthProviderProps
> = ({ children }) => {
  const { data: session } = useSession()
  useEffect(() => {
    if (session) {
      syncSessionWithAuth(session)
    }
  }, [session])
  return <>{children}</>
}
