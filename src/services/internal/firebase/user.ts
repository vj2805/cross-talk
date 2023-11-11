import { signInWithCustomToken, signOut } from "firebase/auth"
import { clientAuth } from "@/backend/firebase/client"
import type { UserService } from "@/types/UserService"

const firebaseUserService: UserService = {
  async syncUser(session) {
    if (session?.firebaseToken) {
      await signInWithCustomToken(clientAuth, session.firebaseToken)
    } else {
      await signOut(clientAuth)
    }
    return session?.user ?? null
  },
}

export default firebaseUserService
