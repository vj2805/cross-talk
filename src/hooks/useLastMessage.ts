import { useEffect, useState } from "react"
import { getLastMessage } from "@/services/message"
import { useProcess } from "./useProcess"
import type { Message } from "@/types/Message"

export function useLastMessage(chatId: string) {
  const { error, processing, setError, startProcess, stopProcess } =
    useProcess()

  const [lastMessage, setLastMessage] = useState<Uncertain<Message>>(undefined)

  useEffect(() => {
    async function fetchLastMessage() {
      startProcess()
      try {
        setLastMessage(await getLastMessage(chatId))
      } catch (error) {
        setError(error as Error)
        setLastMessage(undefined)
      } finally {
        stopProcess()
      }
    }
  }, [chatId, startProcess, setError, stopProcess])

  return [lastMessage, processing, error] as const
}
