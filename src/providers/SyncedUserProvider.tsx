"use client"

import { useEffect } from "react"
import { signInWithCustomToken, signOut } from "firebase/auth"
import { useSession } from "next-auth/react"
import { clientAuth } from "@/firebase"
import type { Session } from "next-auth"

export const SyncedUserProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const { data: session } = useSession()

  useEffect(() => {
    syncUser(session)
  }, [session])

  return <>{props.children}</>
}

async function syncUser(session: Nullish<Session>) {
  if (!session?.firebaseToken) {
    signOut(clientAuth)
  } else {
    signInWithCustomToken(clientAuth, session.firebaseToken).catch(
      console.error
    )
  }
}
