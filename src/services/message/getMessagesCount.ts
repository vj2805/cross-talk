import { getCountFromServer } from "firebase/firestore"
import { limitedMessagesRef } from "./refs"

export async function getMessagesCount(chatId: string) {
  const snapshot = await getCountFromServer(limitedMessagesRef(chatId))
  return snapshot.data().count
}
