"use client"

import { signInWithCustomToken, signOut } from "firebase/auth"
import { clientAuth } from "~/firebase"
import type { Session } from "@types"

export async function syncUser(session: Nullish<Session>) {
  if (!session?.firebaseToken) {
    signOut(clientAuth)
  } else {
    signInWithCustomToken(clientAuth, session.firebaseToken).catch(
      console.error
    )
  }
}
