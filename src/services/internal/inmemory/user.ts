import { getInMemoryState } from "./store"
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
  syncUser(session) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(session?.user ?? null)
      }, 1000)
    })
  },
}

export default inMemoryUserService
