import { useEffect } from "react"
import { subscribeToParticipatingChats } from "@/services/chat"
import { useObservable } from "./useObservable"
import type { Chat } from "@/types/Chat"

export function useParticipatingChats(userId: string, initialChats: Chat[]) {
  const [chats, setChats, setError] = useObservable<Chat[]>(initialChats)

  useEffect(() => {
    if (userId) {
      return subscribeToParticipatingChats({ userId }, setChats, setError)
    }
  }, [userId, setChats, setError])

  return chats
}
