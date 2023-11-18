import { default as messageService } from "./internal/inmemory/message"
import type { MessageService } from "@/types/MessageService"

export const {
  getMessages,
  getMessagesCount,
  postMessage,
  subscribeToLastMessage,
  subscribeToMessages,
}: MessageService = messageService
