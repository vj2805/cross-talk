import { default as chatService } from "./internal/firebase/chat"
import type { ChatService } from "@/types/ChatService"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
  subscribeToChat,
  subscribeToParticipatingChats,
}: ChatService = chatService
