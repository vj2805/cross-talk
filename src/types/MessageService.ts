import type { OnChangeHandler } from "./OnChangeHandler"
import type { Unsubscribe } from "firebase/auth"
import type { Chat } from "./Chat"
import type { Message } from "./Message"

export interface MessageService {
  getLastMessage: (chatId: Chat["id"]) => Promise<Uncertain<Message>>
  getMessages: (chatId: Chat["id"]) => Promise<Message[]>
  getMessagesCount: (chatId: Chat["id"]) => Promise<number>
  postMessage: (
    chatId: Chat["id"],
    input: Message["input"],
    user: Message["user"]
  ) => Promise<void>
  subscribeToMessages: (
    chatId: Chat["id"],
    onChange: OnChangeHandler<Message[]>
  ) => Unsubscribe
}
