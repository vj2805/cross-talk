import type { UserService } from "./UserService"

const syncUser: UserService["syncUser"] = session => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(session?.user ?? null)
    }, 1000)
  })
}

export default function createFirebaseUserService(): UserService {
  return { syncUser }
}
