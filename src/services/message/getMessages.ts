import { getDocs } from "firebase/firestore"
import { sortedMessagesRef } from "./refs"

export async function getMessages(chatId: string) {
  const snapshot = await getDocs(sortedMessagesRef(chatId))
  return snapshot.docs.map(doc => doc.data())
}
