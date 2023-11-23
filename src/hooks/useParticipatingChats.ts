import { useCollectionData } from "react-firebase-hooks/firestore"
import { participatingChatsRef } from "@/services/chat"

export function useParticipatingChats(userId: string) {
  return useCollectionData(participatingChatsRef(userId))
}
