import { chatService } from "./internal"
import type { ChatService } from "@/types/ChatService"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
  subscribeToParticipantsIds,
  subscribeToParticipatingChats,
}: ChatService = chatService
