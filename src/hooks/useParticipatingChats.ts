import { useEffect, useState } from "react"
import { getParticipatingChats } from "@services/chat"
import { useProcess } from "./useProcess"
import type { Chat } from "@services/chat"

export function useParticipatingChats(userId: string, initialChats: Chat[]) {
  const { error, processing, setError, startProcess, stopProcess } =
    useProcess()

  const [chats, setChats] = useState<Uncertain<Chat[]>>(initialChats)

  useEffect(() => {
    async function fetchParticipatingChats() {
      startProcess()
      try {
        setChats(await getParticipatingChats(userId))
      } catch (error) {
        setError(error as Error)
        setChats(undefined)
      } finally {
        stopProcess()
      }
    }
    fetchParticipatingChats()
  }, [userId, setError, startProcess, stopProcess])

  return [chats, processing, error] as const
}
