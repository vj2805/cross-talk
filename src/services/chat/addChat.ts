import { addDoc } from "firebase/firestore"
import { chatsRef } from "./refs"
import type { User } from "@types"

export async function addChat(user: User) {
  const chatRef = await addDoc(chatsRef(), {
    admin: user.id,
    id: "",
    participants: [],
  })
  return chatRef.id
}
