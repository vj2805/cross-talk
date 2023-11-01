import { signInWithCustomToken, signOut } from "firebase/auth"
import { firebaseAuth } from "@/firebase"
import type { Session } from "next-auth"

export async function syncFirebaseAuthWithSession(session: Session) {
  if (!session.firebaseToken) {
    signOut(firebaseAuth)
    return
  }
  try {
    await signInWithCustomToken(firebaseAuth, session.firebaseToken)
  } catch (error) {
    console.log("Error signing in with custom token", error)
  }
}
