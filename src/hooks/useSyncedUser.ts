import { useSyncedUserStore } from "@/stores/syncedUser"

export function useSyncedUser() {
  return useSyncedUserStore(store => store.user)
}
