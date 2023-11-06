import { useCollectionData } from "react-firebase-hooks/firestore"
import { lastMessageRef } from "@services"

export function useLastMessageInChat(chatId: string) {
  return useCollectionData(lastMessageRef(chatId))
}
