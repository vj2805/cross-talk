import type { Mutate } from "./Service"
import type { User } from "./User"
import type { Adapter } from "next-auth/adapters"

export interface AuthService {
  createAuthAdapter: () => Adapter
  createAuthToken: Mutate<
    {
      userId: User["id"]
    },
    string
  >
}
