import type { Chat } from "./Chat"

export interface ChatService {
  createChat: (adminId: Chat["adminId"]) => Promise<Chat["id"]>
  getParticipantsIds: (chatId: Chat["id"]) => Promise<Chat["participantsIds"]>
  getParticipatingChats: (userId: Chat["id"]) => Promise<Chat[]>
}
