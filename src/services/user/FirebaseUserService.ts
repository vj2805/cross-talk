import { signInWithCustomToken, signOut } from "firebase/auth"
import { clientAuth } from "@firebase"
import type { Session } from "next-auth"
import type { UserService } from "./UserService"

async function syncUser(session: Nullish<Session>) {
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
