import { messageService } from "@/backend"
import type { MessageService } from "@/types/MessageService"

export type { Message } from "@/types/Message"

export const {
  getLastMessage,
  getMessages,
  getMessagesCount,
  postMessage,
}: MessageService = messageService
