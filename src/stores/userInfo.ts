import { create } from "zustand"
import type { User } from "next-auth"

type UserInfoStore = {
  userInfo: Optional<User>
}

const useUserInfoStore = create<UserInfoStore>(() => ({
  userInfo: undefined,
}))

export function useUserInfo() {
  return useUserInfoStore(store => store.userInfo)
}

export function setUserInfo(userInfo: Nullish<User>) {
  useUserInfoStore.setState({ userInfo })
}
