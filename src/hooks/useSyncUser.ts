import { useEffect } from "react"
import { syncUser } from "@/services/user"
import { setUser } from "@/stores/user"
import { useSession } from "./useBuiltins"

export function useSyncUser() {
  const { data: session } = useSession()
  useEffect(() => {
    syncUser(session).then(setUser)
  }, [session])
}
