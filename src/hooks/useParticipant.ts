import { useDocumentData } from "react-firebase-hooks/firestore"
import { userRef } from "@/services/user"

export function useParticipant(participantId: string) {
  const [participant, loading, error] = useDocumentData(userRef(participantId))
  if (loading) {
    return [undefined, "loading", undefined] as const
  }
  if (error) {
    return [undefined, "error", error] as const
  }
  if (!participant) {
    const unexpected = new Error("[useParticipant] returned unexpected")
    return [undefined, "error", unexpected] as const
  }
  return [participant, "ready", undefined] as const
}
