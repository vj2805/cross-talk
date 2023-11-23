import { useEffect } from "react"
import { subscribeToMessages } from "@/services/message"
import type { Message } from "@/types/Message"
import { useObservable } from "./useObservable"

export function useMessages(chatId: string) {
  const [messages, setMessages, setError] = useObservable<Message[]>()

  useEffect(
    () => subscribeToMessages({ chatId }, setMessages, setError),
    [chatId, setMessages, setError]
  )

  return messages
}
