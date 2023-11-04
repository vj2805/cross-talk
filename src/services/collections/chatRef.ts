import {
  collection,
  collectionGroup,
  doc,
  query,
  where,
} from "firebase/firestore"
import { clientRepo } from "@/firebase"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { Chat } from "@/types/Chat"

const chatConverter: FirestoreDataConverter<Chat> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      admin: data.admin,
      id: snapshot.id,
      participants: data.participants,
    }
  },
  toFirestore(chat) {
    return chat
  },
}

export function chatsRef() {
  return collection(clientRepo, "chats").withConverter(chatConverter)
}

export function participatingChatsRef(participantId: string) {
  return query(
    chatsRef(),
    where("participants", "array-contains", participantId)
  )
}
