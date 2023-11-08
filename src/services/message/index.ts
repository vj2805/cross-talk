import createMessageService from "./InMemoryMessageService"
import type { MessageService } from "./MessageService"

export type { Message } from "./Message"

export const {
  getLastMessage,
  getMessages,
  getMessagesCount,
  postMessage,
}: MessageService = createMessageService()
