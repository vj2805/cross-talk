import type { Chat } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"

export const chatConverter: FirestoreDataConverter<Chat> = {
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
