import createChatService from "./InMemoryChatService"
import type { ChatService } from "./ChatService"

export { ChatError } from "./ChatError"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
}: ChatService = createChatService()
