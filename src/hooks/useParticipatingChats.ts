import { useEffect, useState } from "react"
import { getParticipatingChats } from "@services/chat"
import { useProcess } from "./useProcess"
import type { Chat } from "@types"

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
  }, [setError, startProcess, stopProcess, userId])

  return [chats, processing, error] as const
}
