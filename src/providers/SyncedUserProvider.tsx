"use client"

import { useEffect } from "react"
import { useSession } from "@hooks"
import { syncUser } from "@services"

export const SyncedUserProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const { data: session } = useSession()

  useEffect(() => {
    syncUser(session)
  }, [session])

  return props.children
}
