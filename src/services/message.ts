import {
  addDoc,
  collection,
  documentId,
  getCountFromServer,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { User } from "next-auth"
import { clientRepo } from "@/configs/firebase/client"
import { messagesQuota } from "@/configs/quota"
import type { Message } from "@/types/Message"

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
  const ref = collection(clientRepo, "chats", chatId, "messages")
  return ref.withConverter(messageConverter)
}

function limitedMessagesRef(chatId: string) {
  return query(messagesRef(chatId), limit(messagesQuota))
}

export function sortedMessagesRef(chatId: string) {
  return query(messagesRef(chatId), orderBy("timestamp", "asc"))
}

export function lastMessageRef(chatId: string) {
  return query(messagesRef(chatId), orderBy("timestamp", "desc"), limit(1))
}

export async function getMessagesCount(chatId: string) {
  const snapshot = await getCountFromServer(limitedMessagesRef(chatId))
  return snapshot.data().count
}

export async function postMessage(chatId: string, input: string, user: User) {
  await addDoc(messagesRef(chatId), {
    id: documentId(),
    input,
    timestamp: serverTimestamp(),
    user,
  })
}
