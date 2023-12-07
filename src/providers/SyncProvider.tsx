"use client"

import { useEffect, useRef, useState } from "react"
import { onSnapshot } from "firebase/firestore"
import type { User } from "next-auth"
import { useSession } from "next-auth/react"
import { showToast } from "@/components/ui"
import { participatingChatsRef } from "@/services/chat"
import { syncIsPro } from "@/services/subscription"
import { syncUser } from "@/services/user"
import { setError, setIsPro, setLoading } from "@/stores/useStore"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  const { data: session, status } = useSession()
  const [user, setUser] = useState<User | null>(null)

  const isFirstMount = useRef(true)

  // Syncing user
  useEffect(() => {
    syncUser(session).then(setUser)
  }, [session])

  // Syncing subscription
  useEffect(() => {
    if (status === "loading") {
      return setLoading()
    }
    if (!session?.user) {
      return setIsPro(false)
    }
    return syncIsPro(session.user.id, setIsPro, setError)
  }, [session, status])

  useEffect(() => {
    if (!user) {
      return
    }
    return onSnapshot(participatingChatsRef(user.id), snapshot => {
      if (snapshot.metadata.hasPendingWrites) {
        return
      }
      if (isFirstMount.current) {
        isFirstMount.current = false
        return
      }
      snapshot.docChanges().forEach(change => {
        if (change.doc.get("adminId") === user.id) {
          return
        }
        switch (change.type) {
          case "added":
            return showToast({
              className: "bg-indigo-400",
              description: "You are added as participant of a new chat!",
              title: "Added to Chat",
            })
          case "removed":
            return showToast({
              description: "You were removed from a chat!",
              title: "Removed from Chat",
              variant: "destructive",
            })
          case "modified":
            return
        }
      })
    })
  }, [user])

  return props.children
}
