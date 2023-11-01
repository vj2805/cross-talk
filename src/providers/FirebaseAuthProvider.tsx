"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { syncFirebaseAuthWithSession } from "@/services/syncFirebaseAuthWithSession"

interface AuthProviderProps {
  children: React.ReactNode
}

export function FirebaseAuthProvider({ children }: AuthProviderProps) {
  const { data: session } = useSession()
  useEffect(() => {
    if (!session) {
      return
    }
    syncFirebaseAuthWithSession(session)
  }, [session])
  return <>{children}</>
}
