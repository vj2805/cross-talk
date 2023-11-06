import { addDoc, serverTimestamp } from "firebase/firestore"
import { messagesRef } from "./refs"
import type { Message } from "@types"

interface AddMessageParams {
  chatId: string
  input: string
  user: Message["user"]
}

export async function addMessage({ chatId, input, user }: AddMessageParams) {
  await addDoc(messagesRef(chatId), {
    id: "",
    input,
    timestamp: serverTimestamp(),
    user: {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    },
  })
}
