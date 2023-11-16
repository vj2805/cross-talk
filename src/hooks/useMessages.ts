import { useEffect } from "react"
import { subscribeToMessages } from "@/services/message"
import { useObservable } from "./useObservable"
import type { Message } from "@/types/Message"

export function useMessages(chatId: string, initialMessages: Message[]) {
  const [messages, setMessages, setError] =
    useObservable<Message[]>(initialMessages)

  useEffect(
    () => subscribeToMessages({ chatId }, setMessages, setError),
    [chatId, setMessages, setError]
  )

  return messages
}
