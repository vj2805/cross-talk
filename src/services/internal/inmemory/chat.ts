import { generateId } from "@/utilities/string"
import { get, set, subscribe } from "./store"
import type { ChatService } from "@/types/ChatService"

const inmemoryChatService: ChatService = {
  async createChat({ adminId }) {
    const id = `chat:${generateId()}`
    set("chats", chats =>
      chats.toSpliced(-1, 0, {
        adminId,
        id,
        participantsIds: [adminId],
      })
    )
    return id
  },
  async getParticipatingChatCount({ userId }) {
    return get("chats").reduce(
      (count, chat) => count + (chat.participantsIds.includes(userId) ? 1 : 0),
      0
    )
  },
  async getParticipatingChats({ userId }) {
    return get("chats").filter(chat => chat.participantsIds.includes(userId))
  },
  subscribeToChat({ chatId }, onChange) {
    return subscribe("chats", chats => {
      const chat = chats.find(chat => chat.id === chatId)
      if (!chat) {
        return
      }
      onChange(chat)
    })
  },
  subscribeToParticipatingChats({ userId }, onChange) {
    return subscribe("chats", chats =>
      onChange(chats.filter(chat => chat.participantsIds.includes(userId)))
    )
  },
}

export default inmemoryChatService
