import { useCollectionData } from "react-firebase-hooks/firestore"
import { lastMessageRef } from "@services/message"

export function useLastMessage(chatId: string) {
  return useCollectionData(lastMessageRef(chatId))
}
