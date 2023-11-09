import type { Session, User } from "next-auth"

export interface UserService {
  syncUser: (session: Nullish<Session>) => Promise<Nullish<User>>
}
