import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore"
import { clientRepo } from "@firebase"
import type { MessageService } from "./MessageService"
import type { Message } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"

const messageConverter: FirestoreDataConverter<Message> = {
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

function messagesRef(chatId: string) {
  return collection(clientRepo, "chats", chatId, "messages").withConverter(
    messageConverter
  )
}

function limitedMessagesRef(chatId: string) {
  return query(messagesRef(chatId), limit(15))
}

function sortedMessagesRef(chatId: string) {
  return query(messagesRef(chatId), orderBy("timestamp", "asc"))
}

function lastMessageRef(chatId: string) {
  return query(messagesRef(chatId), orderBy("timestamp", "desc"), limit(1))
}

async function getLastMessage(chatId: string) {
  const snapshot = await getDocs(lastMessageRef(chatId))
  if (snapshot.empty) {
    return null
  }
  return snapshot.docs[0].data()
}

async function getMessages(chatId: string) {
  const snapshot = await getDocs(sortedMessagesRef(chatId))
  return snapshot.docs.map(doc => doc.data())
}

async function getMessagesCount(chatId: string) {
  const snapshot = await getCountFromServer(limitedMessagesRef(chatId))
  return snapshot.data().count
}

async function postMessage(
  chatId: string,
  input: string,
  user: Message["user"]
) {
  await addDoc(messagesRef(chatId), {
    id: "",
    input,
    localeTimeString: serverTimestamp(),
    user,
  })
}

export default function createFirestoreMessageService(): MessageService {
  return {
    getLastMessage,
    getMessages,
    getMessagesCount,
    postMessage,
  }
}
