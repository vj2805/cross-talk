import createMessageService from "./InMemoryMessageService"
import type { MessageService } from "./MessageService"

export const {
  getLastMessage,
  getMessages,
  getMessagesCount,
  postMessage,
}: MessageService = createMessageService()
