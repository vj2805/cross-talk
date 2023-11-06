import { collection, doc, query, where } from "firebase/firestore"
import { clientRepo } from "@firebase"
import { chatConverter } from "./converter"

export function chatsRef() {
  return collection(clientRepo, "chats").withConverter(chatConverter)
}

export function chatRef(chatId: string) {
  return doc(chatsRef(), chatId)
}

export function participatingChatsRef(participantId: string) {
  return query(
    chatsRef(),
    where("participantsIds", "array-contains", participantId)
  )
}
