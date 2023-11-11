import { messageService } from "./internal"
import type { MessageService } from "@/types/MessageService"

export const {
  getLastMessage,
  getMessages,
  getMessagesCount,
  postMessage,
  subscribeToMessages,
}: MessageService = messageService
