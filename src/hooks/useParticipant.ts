import { useEffect } from "react"
import { subscribeToUser } from "@/services/user"
import type { User } from "@/types/User"
import { useObservable } from "./useObservable"

export function useParticipant(participantId: string) {
  const [participant, setParticipant, setError] = useObservable<User>()

  useEffect(
    () => subscribeToUser({ userId: participantId }, setParticipant, setError),
    [participantId, setParticipant, setError]
  )

  return participant
}
