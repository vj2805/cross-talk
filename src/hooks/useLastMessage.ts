import { useEffect } from "react"
import { subscribeToLastMessage } from "@/services/message"
import type { Message } from "@/types/Message"
import { useObservable } from "./useObservable"

export function useLastMessage(chatId: string) {
  const [lastMessage, setLastMessage, setError] =
    useObservable<Nullish<Message>>()

  useEffect(
    () => subscribeToLastMessage({ chatId }, setLastMessage, setError),
    [chatId, setLastMessage, setError]
  )

  return lastMessage
}
