import type { MessageService } from "@/types/MessageService"
import { default as messageService } from "./internal/firebase/message"

export const {
  getMessages,
  getMessagesCount,
  postMessage,
  subscribeToLastMessage,
  subscribeToMessages,
}: MessageService = messageService
