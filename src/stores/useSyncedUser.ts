import { useSyncedUserStore } from "./syncedUser"

export function useSyncedUser() {
  return useSyncedUserStore(store => store.user)
}
