import type { Chat } from "./Chat"
import type { User } from "./User"

export interface ParticipantService {
  addParticipantToChat: (
    chatId: Chat["id"],
    participantId: User["id"]
  ) => Promise<void>
}
