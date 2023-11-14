import type { Consumer } from "./Consumer"
import type { Unsubscribe } from "./Unsubscribe"
import type { Session } from "next-auth"
import type { User } from "./User"

export interface UserService {
  getUserByEmail: (email: string) => Promise<User>
  subscribeToUser: (
    userId: string,
    onChange: Consumer<User>,
    onError: Consumer<Error>
  ) => Unsubscribe
  syncUser: (session: Nullish<Session>) => Promise<Nullish<User>>
}
