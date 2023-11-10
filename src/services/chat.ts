import createChatService from "@/backend/inmemory/InMemoryChatService"
import type { ChatService } from "@/types/ChatService"

export type { Chat } from "@/types/Chat"
export type { ChatError, ChatErrorCode } from "@/errors/ChatError"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
}: ChatService = createChatService()
