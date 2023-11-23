import { useEffect } from "react"
import { subscribeToChat } from "@/services/chat"
import type { Chat } from "@/types/Chat"
import { useObservable } from "./useObservable"

export function useChat(chatId: string) {
  const [chat, setChat, setError] = useObservable<Chat>()

  useEffect(
    () => subscribeToChat({ chatId }, setChat, setError),
    [chatId, setChat, setError]
  )

  return chat
}
