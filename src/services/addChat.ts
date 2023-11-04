import { addDoc } from "firebase/firestore"
import { chatsRef } from "./collections/chatRef"
import type { User } from "next-auth"

export async function addChat(user: User) {
  const chatRef = await addDoc(chatsRef(), {
    admin: user.id,
    id: "",
    participants: [],
  })
  return chatRef.id
}
