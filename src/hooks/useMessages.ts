import { useEffect } from "react"
import { subscribeToMessages } from "@/services/message"
import { useObservableArray } from "./useObservable"
import type { Message } from "@/types/Message"

export function useMessages(chatId: string, initialMessages: Message[]) {
  const [messages, setMessages, setError] =
    useObservableArray<Message>(initialMessages)

  useEffect(
    () => subscribeToMessages(chatId, setMessages, setError),
    [chatId, setMessages, setError]
  )

  return messages
}
