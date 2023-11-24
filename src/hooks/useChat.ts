import { useDocumentData } from "react-firebase-hooks/firestore"
import { chatRef } from "@/services/chat"
import type { Chat } from "@/types/Chat"
import type { Observable } from "@/types/Observable"

export function useChat(chatId: string) {
  return useDocumentData(chatRef(chatId)) as unknown as Observable<Chat>
}
