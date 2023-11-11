import type { User } from "./User"
import type { OnChangeHandler } from "./OnChangeHandler"
import type { Unsubscribe } from "firebase/auth"
import type { Chat } from "./Chat"

export interface ChatService {
  createChat: (adminId: User["id"]) => Promise<Chat["id"]>
  getParticipantsIds: (chatId: Chat["id"]) => Promise<Chat["participantsIds"]>
  getParticipatingChats: (userId: User["id"]) => Promise<Chat[]>
  subscribeToParticipatingChats: (
    userId: User["id"],
    onChange: OnChangeHandler<Chat[]>
  ) => Unsubscribe
}
