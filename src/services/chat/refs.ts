import { collection, query, where } from "firebase/firestore"
import { clientRepo } from "~/firebase"
import { chatConverter } from "./converter"

export function chatsRef() {
  return collection(clientRepo, "chats").withConverter(chatConverter)
}

export function participatingChatsRef(participantId: string) {
  return query(
    chatsRef(),
    where("participants", "array-contains", participantId)
  )
}
