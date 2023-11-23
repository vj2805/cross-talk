import type { Adapter } from "next-auth/adapters"
import type { Mutate } from "./Service"
import type { User } from "./User"

export interface AuthService {
  createAuthAdapter: () => Adapter
  createAuthToken: Mutate<
    {
      userId: User["id"]
    },
    string
  >
}
