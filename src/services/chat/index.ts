import createChatService from "./InMemoryChatService"
import type { ChatService } from "./ChatService"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
}: ChatService = createChatService()
