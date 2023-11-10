import { generateId } from "@utilities/string"
import { ChatError } from "@errors/ChatError"
import type { Chat } from "../../types/Chat"
import type { ChatService } from "../../types/ChatService"

let chats: Chat[] = []

const createChat: ChatService["createChat"] = adminId => {
  return new Promise<string>(resolve => {
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
}

const getParticipatingChats: ChatService["getParticipatingChats"] = userId => {
  return new Promise<Chat[]>(resolve => {
    setTimeout(() => {
      resolve(chats.filter(chat => chat.participantsIds.includes(userId)))
    }, 1000)
  })
}

const getParticipantsIds: ChatService["getParticipantsIds"] = chatId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chat = chats.find(chat => chat.id === chatId)
      if (!chat) {
        reject(new ChatError(chatId, "Does Not Exist"))
        return
      }
      resolve(chat.participantsIds)
    }, 1000)
  })
}

export default function createInMemoryChatService(): ChatService {
  return {
    createChat,
    getParticipantsIds,
    getParticipatingChats,
  }
}
