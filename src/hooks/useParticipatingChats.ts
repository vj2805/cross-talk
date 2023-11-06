import { participatingChatsRef } from "@services/chat/refs"
import { useCollectionData } from "react-firebase-hooks/firestore"
import type { Chat } from "@types"

export function useParticipatingChats(
  userId: Uncertain<string>,
  initialChats: Chat[]
) {
  return useCollectionData(userId ? participatingChatsRef(userId) : undefined, {
    initialValue: initialChats,
  })
}
