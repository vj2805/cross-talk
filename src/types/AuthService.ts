import type { Mutate, Obtain } from "./Service"
import type { User } from "./User"
import type { Adapter } from "next-auth/adapters"

export interface AuthService {
  createAuthAdapter: Obtain<Adapter>
  createAuthToken: Mutate<
    {
      userId: User["id"]
    },
    string
  >
}
