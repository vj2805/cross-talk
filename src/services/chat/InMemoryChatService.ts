import { generateId } from "@utilities"
import type { Chat } from "@types"
import type { ChatService } from "./ChatService"

let chats: Chat[] = []

function getParticipatingChats(userId: string) {
  return new Promise<Chat[]>(resolve => {
    setTimeout(() => {
      resolve(chats.filter(chat => chat.participantsIds.includes(userId)))
    }, 1000)
  })
}

function createChat(adminId: string) {
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

export function createInMemoryChatService(): ChatService {
  return {
    createChat,
    getParticipatingChats,
  }
}
