import type { UserService } from "@/types/UserService"

const inMemoryUserService: UserService = {
  syncUser(session) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(session?.user ?? null)
      }, 1000)
    })
  },
}

export default inMemoryUserService
