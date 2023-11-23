import { useCollectionData } from "react-firebase-hooks/firestore"
import { participatingChatsRef } from "@/services/chat"

export function useParticipatingChats(userId: string) {
  const [participatingChats, loading, error] = useCollectionData(
    participatingChatsRef(userId)
  )
  if (loading) {
    return [undefined, "loading", undefined] as const
  }
  if (error) {
    return [undefined, "error", error] as const
  }
  if (!participatingChats) {
    const unexpected = new Error("[useParticipatingChats] returned unexpected")
    return [undefined, "error", unexpected] as const
  }
  return [participatingChats, loading, error] as const
}
