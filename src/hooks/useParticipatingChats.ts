import { useEffect } from "react"
import {
  getParticipatingChats,
  subscribeToParticipatingChats,
} from "@/services/chat"
import { useObservableArray } from "./useObservable"
import { useProcess } from "./useProcess"
import type { Chat } from "@/types/Chat"

export function useParticipatingChats(userId: string, initialChats: Chat[]) {
  const [chats, setChats, setError] = useObservableArray<Chat>(initialChats)

  useEffect(
    () => subscribeToParticipatingChats(userId, setChats, setError),
    [userId, setChats, setError]
  )

  return chats
}
