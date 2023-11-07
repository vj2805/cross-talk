import { create } from "zustand"
import type { User } from "next-auth"

type SyncedUserStore = {
  user: Optional<User>
}

const useSyncedUserStore = create<SyncedUserStore>(() => ({
  user: undefined,
}))

export function useSyncedUser() {
  return useSyncedUserStore(store => store.user)
}

export function setSyncedUser(user: Nullish<User>) {
  useSyncedUserStore.setState({ user })
}
