import type { Adapter } from "next-auth/adapters"

export interface AuthService {
  createAuthAdapter: () => Adapter
  createAuthToken: (userId: string) => Promise<string>
}
