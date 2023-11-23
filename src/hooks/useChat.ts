import { useDocumentData } from "react-firebase-hooks/firestore"
import { chatRef } from "@/services/chat"

export function useChat(chatId: string) {
  return useDocumentData(chatRef(chatId))
}
