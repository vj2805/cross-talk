import { chatService } from "@/backend"
import type { ChatService } from "@/types/ChatService"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
  subscribeToParticipatingChats,
}: ChatService = chatService
