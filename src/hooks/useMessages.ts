import { useEffect } from "react"
import { subscribeToMessages } from "@/services/message"
import { useObservable } from "./useObservable"
import type { Message } from "@/types/Message"

export function useMessages(chatId: string) {
  const [messages, setMessages, setError] = useObservable<Message[]>()

  useEffect(
    () => subscribeToMessages({ chatId }, setMessages, setError),
    [chatId, setMessages, setError]
  )

  return messages
}
