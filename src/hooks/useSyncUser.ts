"use client"
import { useEffect } from "react"
import { useSession } from "@hooks"
import { syncUser } from "@services/user"

export function useSyncUser() {
  const { data: session } = useSession()
  useEffect(() => {
    syncUser(session)
  }, [session])
}
