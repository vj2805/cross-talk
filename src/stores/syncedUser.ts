import { create } from "zustand"
import type { User } from "@/types/User"

type SyncedUserStore = {
  user: Optional<User>
}

export const useSyncedUserStore = create<SyncedUserStore>(() => ({
  user: undefined,
}))

export function setSyncedUser(user: Nullish<User>) {
  useSyncedUserStore.setState({ user })
}
