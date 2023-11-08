import createChatService from "./InMemoryChatService"
import type { ChatService } from "./ChatService"

export type { Chat } from "./Chat"
export { ChatError } from "./ChatError"

export const {
  createChat,
  getParticipantsIds,
  getParticipatingChats,
}: ChatService = createChatService()
