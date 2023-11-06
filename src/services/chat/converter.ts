import type { Chat } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"

export const chatConverter: FirestoreDataConverter<Chat> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      adminId: data.adminId,
      id: snapshot.id,
      participantsIds: data.participantsIds,
    }
  },
  toFirestore(chat) {
    delete chat.id
    return chat
  },
}
