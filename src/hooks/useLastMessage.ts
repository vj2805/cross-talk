import { useEffect } from "react"
import { subscribeToLastMessage } from "@/services/message"
import { useObservable } from "./useObservable"
import type { Message } from "@/types/Message"

export function useLastMessage(chatId: string) {
  const [lastMessage, setLastMessage, setError] =
    useObservable<Nullish<Message>>()

  useEffect(
    () => subscribeToLastMessage({ chatId }, setLastMessage, setError),
    [chatId, setLastMessage, setError]
  )

  return lastMessage
}
