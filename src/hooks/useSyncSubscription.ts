import { useEffect } from "react"
import { useUser } from "@/hooks/useUser"
import { syncSubscription } from "@/services/subscription"
import { setSubscription } from "@/stores/subscription"

export function useSyncSubscription() {
  const syncUser = useUser()
  useEffect(() => {
    if (syncUser) {
      return syncSubscription({ userId: syncUser.id }, setSubscription)
    }
  }, [syncUser])
}
