import { addDoc } from "firebase/firestore"
import { chatsRef } from "./refs"

export async function addChat(adminId: string) {
  const chatRef = await addDoc(chatsRef(), {
    admin: adminId,
    id: "",
    participants: [],
  })
  return chatRef.id
}
