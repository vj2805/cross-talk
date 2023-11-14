import type { Chat } from "./Chat"
import type { Consumer } from "./Consumer"
import type { Message } from "./Message"
import type { Unsubscribe } from "./Unsubscribe"

export interface MessageService {
  getLastMessage: (chatId: Chat["id"]) => Promise<Uncertain<Message>>
  getMessages: (chatId: Chat["id"]) => Promise<Message[]>
  getMessagesCount: (chatId: Chat["id"]) => Promise<number>
  postMessage: (
    chatId: Chat["id"],
    input: Message["input"],
    user: Message["user"]
  ) => Promise<void>
  subscribeToLastMessage: (
    chatId: Chat["id"],
    onChange: Consumer<Uncertain<Message>>,
    onError: Consumer<Error>
  ) => Unsubscribe
  subscribeToMessages: (
    chatId: Chat["id"],
    onChange: Consumer<Message[]>,
    onError: Consumer<Error>
  ) => Unsubscribe
}
