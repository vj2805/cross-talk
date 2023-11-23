import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { syncUser } from "@/services/user"

export function useSyncUser() {
  const { data: session } = useSession()
  useEffect(() => {
    syncUser({ session })
  }, [session])
}
