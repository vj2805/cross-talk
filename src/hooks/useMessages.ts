import { useCollectionData } from "react-firebase-hooks/firestore"
import { sortedMessagesRef } from "@/services/message"

export function useMessages(chatId: string) {
  const [messages, loading, error] = useCollectionData(
    sortedMessagesRef(chatId)
  )
  if (loading) {
    return [undefined, "loading", undefined] as const
  }
  if (error) {
    return [undefined, "error", error] as const
  }
  if (!messages) {
    const unexpected = new Error("[useMessages] returned unexpected")
    return [undefined, "error", unexpected] as const
  }
  return [messages, "idle", undefined] as const
}
