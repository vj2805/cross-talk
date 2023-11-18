import { useEffect } from "react"
import { subscribeToUser } from "@/services/user"
import { useObservable } from "./useObservable"
import type { User } from "@/types/User"

export function useParticipant(participantId: string) {
  const [participant, setParticipant, setError] = useObservable<User>()

  useEffect(
    () => subscribeToUser({ userId: participantId }, setParticipant, setError),
    [participantId, setParticipant, setError]
  )

  return participant
}
