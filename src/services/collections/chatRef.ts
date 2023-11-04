import { collection, doc } from "firebase/firestore"
import { clientRepo } from "@/firebase"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { Chat } from "@/types/Chat"

const chatConverter: FirestoreDataConverter<Chat> = {
  fromFirestore(snapshot, options) {
    return {
      id: snapshot.id,
    }
  },
  toFirestore() {
    return {}
  },
}

export function chatsRef() {
  return collection(clientRepo, "chats").withConverter(chatConverter)
}

export function chatRef(chatId: string) {
  return doc(chatsRef(), chatId)
}
