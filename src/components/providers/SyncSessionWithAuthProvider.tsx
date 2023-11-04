"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { syncSessionWithAuth } from "@/services/syncSessionWithAuth"

export const SyncSessionWithAuthProvider: React.FC<
  React.PropsWithRequiredChildren
> = ({ children }) => {
  const { data: session } = useSession()
  useEffect(() => {
    if (session) {
      syncSessionWithAuth(session)
    }
  }, [session])
  return <>{children}</>
}
