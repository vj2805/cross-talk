"use client"
import { useEffect } from "react"
import { useSession } from "@hooks"
import { syncUser } from "@services/user"
import { setSyncedUser } from "@stores/syncedUser"

export function useSyncUser() {
  const { data: session } = useSession()
  useEffect(() => {
    syncUser(session).then(setSyncedUser)
  }, [session])
}
