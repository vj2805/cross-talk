import type { Chat } from "./Chat"
import type { Mutate, Query, Subscribe } from "./Service"
import type { User } from "./User"

export interface ChatService {
  createChat: Mutate<
    {
      adminId: User["id"]
    },
    Chat["id"]
  >
  getParticipatingChatCount: Query<
    {
      userId: User["id"]
    },
    number
  >
  getParticipatingChats: Query<
    {
      userId: User["id"]
    },
    Chat[]
  >
  subscribeToChat: Subscribe<
    {
      chatId: string
    },
    Chat
  >
  subscribeToParticipatingChats: Subscribe<
    {
      userId: string
    },
    Chat[]
  >
}
