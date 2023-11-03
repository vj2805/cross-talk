import { signInWithCustomToken, signOut } from "firebase/auth"
import { clientAuth } from "@/firebase"
import type { Session } from "next-auth"

export async function syncSessionWithAuth(session: Session) {
  if (!session.firebaseToken) {
    signOut(clientAuth)
    return
  }
  try {
    await signInWithCustomToken(clientAuth, session.firebaseToken)
  } catch (error) {
    console.log("Error signing in with custom token", error)
  }
}
