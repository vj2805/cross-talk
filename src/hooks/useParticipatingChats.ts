import { useCollectionData } from "react-firebase-hooks/firestore"
import { participatingChatsRef } from "@/services/chat"
import type { Chat } from "@/types/Chat"
import type { Observable } from "@/types/Observable"

export function useParticipatingChats(userId: string) {
  return useCollectionData(
    participatingChatsRef(userId)
  ) as unknown as Observable<Chat[]>
}
