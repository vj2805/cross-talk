import type { Message } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"

export const messageConverter: FirestoreDataConverter<Message> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      id: snapshot.id,
      input: data.input,
      localeTimeString: data.timestamp.toDate().toLocaleTimeString(),
      translated: data.translated,
      user: data.user,
    }
  },
  toFirestore(message) {
    return {
      input: message.input,
      timestamp: message.localeTimeString,
      user: message.user,
    }
  },
}
