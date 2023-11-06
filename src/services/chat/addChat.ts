import { addDoc } from "firebase/firestore"
import { chatsRef } from "./refs"

export async function addChat(adminId: string) {
  const chatRef = await addDoc(chatsRef(), {
    adminId: adminId,
    id: "",
    participantsIds: [adminId],
  })
  return chatRef.id
}
