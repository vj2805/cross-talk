import { messageService } from "./internal"
import type { MessageService } from "@/types/MessageService"

export const {
  getLastMessage,
  getMessages,
  getMessagesCount,
  postMessage,
  subscribeToLastMessage,
  subscribeToMessages,
}: MessageService = messageService
