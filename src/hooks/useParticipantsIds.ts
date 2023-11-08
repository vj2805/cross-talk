import { useEffect, useState } from "react"
import { getParticipantsIds } from "@services/chat"
import { useProcess } from "./useProcess"

export function useParticipantsIds(chatId: string) {
  const { error, processing, setError, startProcess, stopProcess } =
    useProcess()
  const [participantsIds, setParticipantsIds] =
    useState<Uncertain<string[]>>(undefined)

  useEffect(() => {
    async function fetchParticipantsIds() {
      startProcess()
      try {
        setParticipantsIds(await getParticipantsIds(chatId))
      } catch (error) {
        setError(error as Error)
        setParticipantsIds(undefined)
      } finally {
        stopProcess()
      }
    }
    fetchParticipantsIds()
  }, [chatId, setError, startProcess, stopProcess])

  return [participantsIds, processing, error] as const
}
