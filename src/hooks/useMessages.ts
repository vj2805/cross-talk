import { useCollectionData } from "react-firebase-hooks/firestore"
import { sortedMessagesRef } from "@/services/message"
import type { Message } from "@/types/Message"
import type { Observable } from "@/types/Observable"

export function useMessages(chatId: string) {
  return useCollectionData(sortedMessagesRef(chatId)) as unknown as Observable<
    Message[]
  >
}
