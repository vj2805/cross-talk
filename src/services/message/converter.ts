import type { Message } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"

export const messageConverter: FirestoreDataConverter<Message> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      id: snapshot.id,
      input: data.input,
      timestamp: data.timestamp,
      translated: data.translated,
      user: data.user,
    }
  },
  toFirestore(message) {
    return {
      input: message.input,
      timestamp: message.timestamp,
      user: message.user,
    }
  },
}
