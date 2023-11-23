import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientRepo } from "@/backend/firebase/client"
import type { Message } from "@/types/Message"
import type { MessageService } from "@/types/MessageService"

const messageConverter: FirestoreDataConverter<Message> = {
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

function messagesRef(chatId: string) {
  return collection(clientRepo, "chats", chatId, "messages").withConverter(
    messageConverter
  )
}

function limitedMessagesRef(chatId: string) {
  return query(messagesRef(chatId), limit(25))
}

function sortedMessagesRef(chatId: string) {
  return query(messagesRef(chatId), orderBy("timestamp", "asc"))
}

function lastMessageRef(chatId: string) {
  return query(messagesRef(chatId), orderBy("timestamp", "desc"), limit(1))
}

const firebaseMessageService: MessageService = {
  async getMessages({ chatId }) {
    const snapshot = await getDocs(sortedMessagesRef(chatId))
    return snapshot.docs.map(doc => doc.data())
  },
  async getMessagesCount({ chatId }) {
    const snapshot = await getCountFromServer(limitedMessagesRef(chatId))
    return snapshot.data().count
  },
  async postMessage({ chatId, input, user }) {
    await addDoc(messagesRef(chatId), {
      id: "",
      input,
      timestamp: serverTimestamp(),
      user,
    })
  },
  subscribeToLastMessage({ chatId }, onChange, onError) {
    return onSnapshot(
      lastMessageRef(chatId),
      snapshot => onChange(snapshot.empty ? null : snapshot.docs[0].data()),
      onError
    )
  },
  subscribeToMessages({ chatId }, onChange, onError) {
    return onSnapshot(
      sortedMessagesRef(chatId),
      snapshot => onChange(snapshot.docs.map(doc => doc.data())),
      onError
    )
  },
}

export default firebaseMessageService
