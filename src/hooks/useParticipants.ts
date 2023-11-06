import { useDocumentData } from "react-firebase-hooks/firestore"
import { chatRef } from "@services"

export function useParticipants(chatId: string) {
  const [chat, loading, error] = useDocumentData(chatRef(chatId))
  return [chat?.participantsIds, chat?.adminId, loading, error] as const
}
