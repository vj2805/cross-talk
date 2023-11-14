import { default as messageService } from "./internal/firebase/message"
import type { MessageService } from "@/types/MessageService"

export const {
  getLastMessage,
  getMessages,
  getMessagesCount,
  postMessage,
  subscribeToLastMessage,
  subscribeToMessages,
}: MessageService = messageService
