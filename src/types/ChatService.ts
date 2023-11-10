import type { Chat } from "./Chat"

export interface ChatService {
  createChat: (adminId: string) => Promise<Chat["id"]>
  getParticipantsIds: (chatId: string) => Promise<Chat["participantsIds"]>
  getParticipatingChats: (userId: string) => Promise<Chat[]>
}
