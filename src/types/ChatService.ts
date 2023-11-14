import type { Chat } from "./Chat"
import type { Consumer } from "./Consumer"
import type { Unsubscribe } from "./Unsubscribe"
import type { User } from "./User"

export interface ChatService {
  createChat: (adminId: User["id"]) => Promise<Chat["id"]>
  getParticipantsIds: (chatId: Chat["id"]) => Promise<Chat["participantsIds"]>
  getParticipatingChats: (userId: User["id"]) => Promise<Chat[]>
  subscribeToParticipantsIds: (
    chatId: Chat["id"],
    onChange: Consumer<Chat["participantsIds"]>,
    onError: Consumer<Error>
  ) => Unsubscribe
  subscribeToParticipatingChats: (
    userId: User["id"],
    onChange: Consumer<Chat[]>,
    onError: Consumer<Error>
  ) => Unsubscribe
}
