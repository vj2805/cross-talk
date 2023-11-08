import createChatService from "./InMemoryChatService"
import type { ChatService } from "./ChatService"

export const {
  createChat,
  getParticipatingChats,
  useParticipatingChats,
}: ChatService = createChatService()
