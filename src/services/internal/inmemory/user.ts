import { getInMemoryState, subscribeToInMemoryStore } from "./store"
import type { UserService } from "@/types/UserService"

const inMemoryUserService: UserService = {
  async getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = getInMemoryState("users").find(
          user => user.email === email
        )
        if (!user) {
          reject(new Error(`User with email ${email} does not exist!`))
          return
        }
        resolve(user)
      }, 1000)
    })
  },
  subscribeToUser(userId, onChange, onError) {
    return subscribeToInMemoryStore(
      "users",
      users => users.find(user => user.id === userId),
      user =>
        user
          ? onChange(user)
          : onError(new Error(`User with id (${userId}) does not exist!`)),
      {
        fireImmediately: true,
      }
    )
  },
  syncUser(session) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(session?.user ?? null)
      }, 1000)
    })
  },
}

export default inMemoryUserService
