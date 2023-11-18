import type { Session } from "next-auth"
import type { Mutate, Query, Subscribe } from "./Service"
import type { User } from "./User"

export interface UserService {
  getUserByEmail: Query<
    {
      email: string
    },
    User
  >
  subscribeToUser: Subscribe<
    {
      userId: string
    },
    User
  >
  syncUser: Mutate<
    {
      session: Nullish<Session>
    },
    Nullish<User>
  >
}
