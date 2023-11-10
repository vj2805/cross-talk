import { create } from "zustand"
import type { User } from "@/types/User"

type UserStore = {
  user: Optional<User>
}

export const useUserStore = create<UserStore>(() => ({
  user: undefined,
}))

export function setUser(user: Nullish<User>) {
  useUserStore.setState({ user })
}
