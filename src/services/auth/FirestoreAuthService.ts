import { FirestoreAdapter } from "@auth/firebase-adapter"
import { adminAuth, adminRepo } from "@backend/firebase"
import type { AuthService } from "./AuthService"

const createAuthAdapter: AuthService["createAuthAdapter"] = () => {
  return FirestoreAdapter(adminRepo)
}

const createAuthToken: AuthService["createAuthToken"] = userId => {
  return adminAuth.createCustomToken(userId)
}

export default function createFirestoreAuthService(): AuthService {
  return { createAuthAdapter, createAuthToken }
}
