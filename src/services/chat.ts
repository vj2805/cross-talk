import { chatService } from "@/backend"
import type { ChatService } from "@/types/ChatService"

export type { Chat } from "@/types/Chat"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
}: ChatService = chatService
