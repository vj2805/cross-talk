import { useEffect, useState } from "react"
import { getMessages } from "@services/message"
import { useProcess } from "../useProcess"
import type { Message } from "@services/message"

export function useMessages(chatId: string, initialMessages: Message[]) {
  const { error, processing, setError, startProcess, stopProcess } =
    useProcess()

  const [messages, setMessages] =
    useState<Uncertain<Message[]>>(initialMessages)

  useEffect(() => {
    async function fetchMessages() {
      startProcess()
      try {
        setMessages(await getMessages(chatId))
      } catch (error) {
        setError(error as Error)
        setMessages(undefined)
      } finally {
        stopProcess()
      }
    }
    fetchMessages()
  }, [chatId, startProcess, setError, stopProcess])

  return [messages, processing, error] as const
}
