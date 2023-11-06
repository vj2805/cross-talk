import { signInWithCustomToken, signOut, updateProfile } from "firebase/auth"
import { clientAuth } from "@firebase"
import type { Session } from "@types"

export async function syncUser(session: Nullish<Session>) {
  if (!session?.firebaseToken) {
    signOut(clientAuth)
  } else {
    signInWithCustomToken(clientAuth, session.firebaseToken)
      .then(credential =>
        updateProfile(credential.user, {
          displayName: session.user?.name,
          photoURL: session.user?.image,
        })
      )
      .catch(console.error)
  }
}
