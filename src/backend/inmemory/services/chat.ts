import { generateId } from "@/utilities/string"
import type { Chat } from "@/types/Chat"
import type { ChatService } from "@/types/ChatService"

let chats: Chat[] = []

const inMemoryChatSerice: ChatService = {
  createChat(adminId) {
    return new Promise(resolve => {
      setTimeout(() => {
        const id = generateId()
        chats = chats.toSpliced(-1, 0, {
          adminId,
          id,
          participantsIds: [adminId],
        })
        resolve(id)
      }, 1000)
    })
  },
  getParticipantsIds(chatId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const chat = chats.find(chat => chat.id === chatId)
        if (!chat) {
          reject(
            new Error(
              `[getParticipantsIds] Chat with id (${chatId}) does not exist!`
            )
          )
          return
        }
        resolve(chat.participantsIds)
      }, 1000)
    })
  },
  getParticipatingChats(userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(chats.filter(chat => chat.participantsIds.includes(userId)))
      }, 1000)
    })
  },
}

export default inMemoryChatSerice