import { useEffect } from "react"
import { useSyncedUser } from "@/hooks/useSyncedUser"
import { syncSubscription } from "@/services/subscription"
import { setSubscription } from "@/stores/subscription"

export function useSyncSubscription() {
  const syncUser = useSyncedUser()
  useEffect(() => {
    if (syncUser) {
      return syncSubscription(syncUser.id, setSubscription)
    }
  }, [syncUser])
}
