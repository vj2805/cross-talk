import { useCollectionData } from "react-firebase-hooks/firestore"
import { sortedMessagesRef } from "@services/message"
import type { Message } from "@types"

export function useMessages(chatId: string, initialMessages: Message[]) {
  return useCollectionData(sortedMessagesRef(chatId), {
    initialValue: initialMessages,
  })
}
