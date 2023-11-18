import { ChatError } from "@/errors/ChatError"
import { UserError } from "@/errors/UserError"
import { get, set } from "./store"
import type { ParticipantService } from "@/types/ParticipantService"

const inmemoryParticipantService: ParticipantService = {
  async addParticipantToChat({ chatId, participantId }) {
    const participant = get("users").some(user => user.id === participantId)
    if (!participant) {
      throw new UserError("User does not exist!")
    }
    const chat = get("chats").find(chat => chat.id === chatId)
    if (!chat) {
      throw new ChatError("Chat does not exist!")
    }
    set("chats", chats =>
      chats.map(chat =>
        chat.id !== chatId
          ? chat
          : {
              ...chat,
              participantsIds: chat.participantsIds.toSpliced(
                -1,
                0,
                participantId
              ),
            }
      )
    )
  },
  async isUserParticipantOfChat({ chatId, userId }) {
    const participant = get("users").some(user => user.id === userId)
    if (!participant) {
      throw new UserError("User does not exist!")
    }
    const chat = get("chats").find(chat => chat.id === chatId)
    if (!chat) {
      throw new ChatError("Chat does not exist!")
    }
    return chat.participantsIds.includes(userId)
  },
}

export default inmemoryParticipantService
