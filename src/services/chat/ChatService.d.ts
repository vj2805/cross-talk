import type { Chat } from "@types"

export interface ChatService {
  createChat: (adminId: string) => Promise<Chat["id"]>
  getParticipantsIds: (chatId: string) => Promise<string[]>
  getParticipatingChats: (userId: string) => Promise<Chat[]>
}
