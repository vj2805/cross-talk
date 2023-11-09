import createAuthService from "./FirestoreAuthService"
import type { AuthService } from "./AuthService"

export const { createAuthAdapter, createAuthToken }: AuthService =
  createAuthService()
