import { FirestoreAdapter } from "@auth/firebase-adapter"
import { adminAuth, adminRepo } from "../admin"
import type { AuthService } from "@/types/AuthService"

const firebaseAuthService: AuthService = {
  createAuthAdapter() {
    return FirestoreAdapter(adminRepo)
  },
  createAuthToken(userId) {
    return adminAuth.createCustomToken(userId)
  },
}

export default firebaseAuthService
