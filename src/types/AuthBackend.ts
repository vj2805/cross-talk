import type { User } from "./User"
import type { Adapter } from "next-auth/adapters"

export interface AuthBackend {
  createAuthAdapter: () => Adapter
  createAuthToken: (userId: User["id"]) => Promise<string>
}
