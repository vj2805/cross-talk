"use client"

import { useEffect } from "react"
import { signInWithCustomToken, signOut } from "firebase/auth"
import { useSession } from "next-auth/react"
import { clientAuth } from "@/firebase"

export const SyncedUserProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session?.firebaseToken) {
      signOut(clientAuth)
    } else {
      signInWithCustomToken(clientAuth, session.firebaseToken).catch(
        console.error
      )
    }
  }, [session])

  return props.children
}
