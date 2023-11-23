import type { ChatService } from "@/types/ChatService"
import { default as chatService } from "./internal/firebase/chat"

export const {
  createChat,
  getParticipatingChatCount,
  getParticipatingChats,
  subscribeToChat,
  subscribeToParticipatingChats,
}: ChatService = chatService
