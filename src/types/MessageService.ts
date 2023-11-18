import type { Chat } from "./Chat"
import type { Message } from "./Message"
import type { Mutate, Query, Subscribe } from "./Service"

export interface MessageService {
  getMessages: Query<
    {
      chatId: Chat["id"]
    },
    Message[]
  >
  getMessagesCount: Query<
    {
      chatId: Chat["id"]
    },
    number
  >
  postMessage: Mutate<
    {
      chatId: Chat["id"]
      input: Message["input"]
      user: Message["user"]
    },
    void
  >
  subscribeToLastMessage: Subscribe<
    {
      chatId: Chat["id"]
    },
    Nullish<Message>
  >
  subscribeToMessages: Subscribe<
    {
      chatId: Chat["id"]
    },
    Message[]
  >
}
