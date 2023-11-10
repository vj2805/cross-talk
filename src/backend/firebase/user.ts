import { signInWithCustomToken, signOut } from "firebase/auth"
import { clientAuth } from "./config/client"
import type { UserService } from "@/types/UserService"

export const firebaseUserService: UserService = {
  async syncUser(session) {
    if (session?.firebaseToken) {
      await signInWithCustomToken(clientAuth, session.firebaseToken)
    } else {
      await signOut(clientAuth)
    }
    return session?.user ?? null
  },
}
