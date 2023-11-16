import { UserError } from "@/errors/UserError"
import { useUserStore } from "@/stores/user"

export function useUser() {
  const user = useUserStore(store => store.user)
  if (!user) {
    throw new UserError("User is NOT signed in!")
  }
  return user
}
