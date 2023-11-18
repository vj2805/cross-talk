import { UserError } from "@/errors/UserError"
import { get, subscribe } from "./store"
import type { UserService } from "@/types/UserService"

const inmemoryUserService: UserService = {
  async getUserByEmail({ email }) {
    const user = get("users").find(user => user.email === email)
    if (!user) {
      throw new UserError("User does not exist!")
    }
    return user
  },
  subscribeToUser({ userId }, onChange) {
    return subscribe("users", users => {
      const user = users.find(user => user.id === userId)
      if (!user) {
        return
      }
      onChange(user)
    })
  },
  async syncUser({ session }) {
    return session?.user ?? null
  },
}

export default inmemoryUserService
