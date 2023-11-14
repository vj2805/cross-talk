import { chatService } from "./internal"
import type { ChatService } from "@/types/ChatService"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
  subscribeToChat,
  subscribeToParticipatingChats,
}: ChatService = chatService
