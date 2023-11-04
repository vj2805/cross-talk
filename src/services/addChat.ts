import { addDoc, serverTimestamp } from "firebase/firestore"
import { chatsRef } from "./collections/chatRef"
import { participantsRef } from "./collections/participantRef"
import type { User } from "next-auth"

export async function addChat(user: User) {
  const chatRef = await addDoc(chatsRef(), { id: "" })
  await addDoc(participantsRef(chatRef.id), {
    chatId: chatRef.id,
    email: user.email!,
    image: user.image ?? "",
    isAdmin: true,
    timestamp: serverTimestamp(),
    userId: user.id,
  })
  return chatRef.id
}
