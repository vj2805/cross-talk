import { collection, doc, limit, orderBy, query } from "firebase/firestore"
import { clientRepo } from "@firebase"
import { messageConverter } from "./converter"

export function messagesRef(chatId: string) {
  return collection(clientRepo, "chats", chatId, "messages").withConverter(
    messageConverter
  )
}

export function limitedMessagesRef(chatId: string) {
  return query(messagesRef(chatId), limit(15))
}

export function sortedMessagesRef(chatId: string) {
  return query(messagesRef(chatId), orderBy("timestamp", "asc"))
}

export function lastMessageRef(chatId: string) {
  return query(messagesRef(chatId), orderBy("timestamp", "desc"), limit(1))
}
