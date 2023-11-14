import { identity } from "@/utilities/functions"
import { getInMemoryState, setInMemoryState } from "./store"
import type { ParticipantService } from "@/types/ParticipantService"

const inMemoryParticipantService: ParticipantService = {
  async addParticipantToChat(chatId, participantId) {
    const user = getInMemoryState("users").find(user => user.id)
    if (!user) {
      throw new Error(`User with id (${participantId}) does not exist!`)
    }
    const index = getInMemoryState("chats").findIndex(
      chat => chat.id === chatId
    )
    if (!index) {
      throw new Error(`Chat with id (${chatId}) does not exist!`)
    }
    setInMemoryState("chats", chats =>
      chats.with(index, {
        ...chats[index],
        participantsIds: chats[index].participantsIds.toSpliced(
          -1,
          0,
          participantId
        ),
      })
    )
  },
}

export default inMemoryParticipantService
