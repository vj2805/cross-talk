import { signInWithCustomToken, signOut } from "firebase/auth"
import { clientAuth } from "@backend/firebase/client"
import type { UserService } from "../../types/UserService"

const syncUser: UserService["syncUser"] = async session => {
  if (session?.firebaseToken) {
    await signInWithCustomToken(clientAuth, session.firebaseToken)
  } else {
    await signOut(clientAuth)
  }
  return session?.user ?? null
}

export default function createFirebaseUserService(): UserService {
  return { syncUser }
}