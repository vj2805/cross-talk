import { useEffect } from "react"
import { subscribeToParticipatingChats } from "@/services/chat"
import type { Chat } from "@/types/Chat"
import { useObservable } from "./useObservable"

export function useParticipatingChats(userId: string) {
  const [chats, setChats, setError] = useObservable<Chat[]>()

  useEffect(() => {
    if (userId) {
      return subscribeToParticipatingChats({ userId }, setChats, setError)
    }
  }, [userId, setChats, setError])

  return chats
}
