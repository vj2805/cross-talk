import { useDocumentData } from "react-firebase-hooks/firestore"
import { chatRef } from "@/services/chat"

export function useChat(chatId: string) {
  const [chat, loading, error] = useDocumentData(chatRef(chatId))
  if (loading) {
    return [undefined, "loading", undefined] as const
  }
  if (error) {
    return [undefined, "error", error] as const
  }
  if (!chat) {
    const unexpected = new Error("[useChat] returned unexpected")
    return [undefined, "error", unexpected] as const
  }
  return [chat, "idle", undefined] as const
}
