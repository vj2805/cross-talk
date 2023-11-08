import createMessageService from "./FirestoreMessageService"
import type { MessageService } from "./MessageService"

export const {
  getLastMessage,
  getMessages,
  getMessagesCount,
  postMessage,
}: MessageService = createMessageService()
