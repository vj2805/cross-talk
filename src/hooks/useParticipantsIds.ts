import { useEffect } from "react"
import { subscribeToParticipantsIds } from "@/services/chat"
import { useObservableArray } from "./useObservable"

export function useParticipantsIds(chatId: string) {
  const [participantsIds, setParticipantsIds, setError] =
    useObservableArray<string>()

  useEffect(
    () => subscribeToParticipantsIds(chatId, setParticipantsIds, setError),
    [chatId, setParticipantsIds, setError]
  )

  return participantsIds
}
