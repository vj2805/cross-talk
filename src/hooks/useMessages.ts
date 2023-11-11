import { useEffect, useState } from "react"
import { subscribeToMessages } from "@/services/message"
import { useProcess } from "./useProcess"
import type { Message } from "@/types/Message"

export function useMessages(chatId: string, initialMessages: Message[]) {
  const { error, processing, setError, startProcess, stopProcess } =
    useProcess()

  const [messages, setMessages] = useState<ObservableArray<Message>>({
    status: "initial",
    value: initialMessages,
  })

  useEffect(() => {
    return subscribeToMessages(chatId, messages =>
      setMessages({ status: "idle", value: messages })
    )
  }, [chatId, startProcess, setError, stopProcess])

  return [messages, processing, error] as const
}
