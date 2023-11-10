import { useEffect } from "react"
import { syncSubscription } from "@/services/subscription"
import { setSubscription } from "@/stores/subscription"
import { useSyncedUser } from "@/stores/syncedUser"

export function useSyncSubscription() {
  const syncUser = useSyncedUser()
  useEffect(() => {
    if (syncUser) {
      return syncSubscription(syncUser.id, setSubscription)
    }
  }, [syncUser])
}
