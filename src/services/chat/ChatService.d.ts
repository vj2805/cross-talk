import type { Chat } from "@types"

export interface ChatService {
  createChat: (adminId: string) => Promise<Chat["id"]>
  getParticipatingChats: (userId: string) => Promise<Chat[]>
}