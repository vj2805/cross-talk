import { default as chatService } from "./internal/firebase/chat"
import type { ChatService } from "@/types/ChatService"

export const {
  createChat,
  getParticipatingChats,
  subscribeToChat,
  subscribeToParticipatingChats,
}: ChatService = chatService
