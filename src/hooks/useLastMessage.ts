import { useCollectionData } from "react-firebase-hooks/firestore"
import { lastMessageRef } from "@/services/message"
import type { Message } from "@/types/Message"
import type { Observable } from "@/types/Observable"

export function useLastMessage(chatId: string) {
  return useCollectionData(lastMessageRef(chatId)) as unknown as Observable<
    Optional<Message>
  >
}
