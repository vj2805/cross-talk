import { create } from "zustand"
import type { User } from "@/types/User"

export const useSyncedUser = create<Observable<User>>(() => ({
  status: "loading",
}))

export function setSyncedUser(user: Nullish<User>) {
  useSyncedUser.setState({ status: "idle", value: user })
}
