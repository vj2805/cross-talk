import { generateId } from "@utilities"
import type { Chat } from "@types"
import type { ChatService } from "./ChatService"

let chats: Chat[] = []

function _createChat(adminId: string) {
  const id = generateId()
  chats = chats.toSpliced(-1, 0, {
    adminId,
    id,
    participantsIds: [adminId],
  })
  return id
}

const createChat: ChatService["createChat"] = adminId => {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      const id = _createChat(adminId)
      resolve(id)
    }, 1000)
  })
}

function _getParticipatingChats(userId: string) {
  return chats.filter(chat => chat.participantsIds.includes(userId))
}

const getParticipatingChats: ChatService["getParticipatingChats"] = userId => {
  return new Promise<Chat[]>(resolve => {
    setTimeout(() => {
      resolve(_getParticipatingChats(userId))
    }, 1000)
  })
}

export default function createInMemoryChatService(): ChatService {
  return {
    createChat,
    getParticipatingChats,
  }
}
