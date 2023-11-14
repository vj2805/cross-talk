import type { Session } from "next-auth"
import type { User } from "./User"

export interface UserService {
  getUserByEmail: (email: string) => Promise<User>
  syncUser: (session: Nullish<Session>) => Promise<Nullish<User>>
}
