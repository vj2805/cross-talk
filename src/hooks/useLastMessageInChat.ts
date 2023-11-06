import { useCollectionData } from "react-firebase-hooks/firestore"

export function useLastMessageInChat(chatId: string) {
  return useCollectionData()
}
