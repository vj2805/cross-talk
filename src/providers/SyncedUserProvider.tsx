"use client"

import { useEffect } from "react"
import { useSession } from "@hooks"
import { signInToFirebaseWithCustomToken, signOutFromFirebase } from "@services"
import type { Session } from "@types"
import { clientAuth } from "~/firebase"

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
    signOutFromFirebase(clientAuth)
  } else {
    signInToFirebaseWithCustomToken(clientAuth, session.firebaseToken).catch(
      console.error
    )
  }
}
