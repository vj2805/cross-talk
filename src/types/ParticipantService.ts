import type { Chat } from "./Chat"
import type { Mutate } from "./Service"
import type { User } from "./User"

export interface ParticipantService {
  addParticipantToChat: Mutate<
    {
      chatId: Chat["id"]
      participantId: User["id"]
    },
    void
  >
}
