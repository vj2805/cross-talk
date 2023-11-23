import { useCollectionData } from "react-firebase-hooks/firestore"
import { lastMessageRef } from "@/services/message"

export function useLastMessage(chatId: string) {
  const [messages, loading, error] = useCollectionData(lastMessageRef(chatId))
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
  const lastMessage = messages.at(-1) ?? null
  return [lastMessage, "ready", undefined] as const
}
