import createChatService from "./InMemoryChatService"
import type { ChatService } from "./ChatService"

export type { Chat, ChatError, ChatErrorCode } from "./Chat"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
}: ChatService = createChatService()
