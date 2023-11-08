import { signInWithCustomToken, signOut } from "firebase/auth"
import { clientAuth } from "@firebase"
import { setSyncedUser } from "@stores/syncedUser"
import type { Session } from "next-auth"

export async function syncUser(session: Nullish<Session>) {
  try {
    if (session?.firebaseToken) {
      await signInWithCustomToken(clientAuth, session.firebaseToken)
    } else {
      await signOut(clientAuth)
    }
    setSyncedUser(session?.user ?? null)
  } catch (error) {
    console.log(error)
  }
}
