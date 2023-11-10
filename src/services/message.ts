import createMessageService from "@/backend/inmemory/InMemoryMessageService"
import type { MessageService } from "@/types/MessageService"

export type { Message } from "@/types/Message"

export const {
  getLastMessage,
  getMessages,
  getMessagesCount,
  postMessage,
}: MessageService = createMessageService()
