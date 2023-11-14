import { FirestoreAdapter } from "@auth/firebase-adapter"
import { adminAuth, adminRepo } from "@/backend/firebase/admin"
import type { AuthBackend } from "@/types/AuthBackend"

const firebaseAuthService: AuthBackend = {
  createAuthAdapter() {
    return FirestoreAdapter(adminRepo)
  },
  createAuthToken(userId) {
    return adminAuth.createCustomToken(userId)
  },
}

export default firebaseAuthService
