import type { Chat } from "./Chat"
import type { Mutate, Query } from "./Service"
import type { User } from "./User"

export interface ParticipantService {
  addParticipantToChat: Mutate<
    {
      chatId: Chat["id"]
      participantId: User["id"]
    },
    void
  >
  isUserParticipantOfChat: Query<
    {
      chatId: Chat["id"]
      userId: User["id"]
    },
    boolean
  >
}
