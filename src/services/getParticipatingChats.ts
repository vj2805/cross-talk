import { getDocs } from "firebase/firestore"
import { participatingChatsRef } from "./collections/chatRef"

export async function getParticipatingChats(userId: string) {
  const snapshot = await getDocs(participatingChatsRef(userId))
  return snapshot.docs.map(doc => doc.data())
}