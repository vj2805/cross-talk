import type { Message } from "@types"

export interface MessageService {
  getMessages: (chatId: string) => Promise<Message[]>
  getMessagesCount: (chatId: string) => Promise<number>
  postMessage: (
    chatId: string,
    input: string,
    user: Message["user"]
  ) => Promise<void>
}
