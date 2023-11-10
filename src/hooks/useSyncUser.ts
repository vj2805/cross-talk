import { useEffect } from "react"
import { syncUser } from "@/services/user"
import { setSyncedUser } from "@/stores/syncedUser"
import { useSession } from "./useBuiltins"

export function useSyncUser() {
  const { data: session } = useSession()
  useEffect(() => {
    syncUser(session).then(setSyncedUser)
  }, [session])
}
