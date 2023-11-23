import { useEffect } from "react"
import { useUser } from "@/hooks/useUser"
import { syncSubscription } from "@/services/subscription"
import { setSubscription } from "@/stores/subscription"

export function useSyncSubscription() {
  const [syncUser, status, error] = useUser()
  useEffect(() => {
    switch (status) {
      case "loading":
        return
      case "error":
        return
      case "authenticated":
      case "unauthenticated":
    }
    if (syncUser) {
      return syncSubscription({ userId: syncUser.id }, setSubscription)
    }
  }, [syncUser, status, error])
}
