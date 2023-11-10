import { generateId } from "@/utilities/string"
import type { Message } from "@/types/Message"
import type { MessageService } from "@/types/MessageService"

const messages: Map<string, Message[]> = new Map()

const inMemoryMessageService: MessageService = {
  getLastMessage(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(messages.get(chatId)?.at(0))
      }, 1000)
    })
  },
  getMessages(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(messages.get(chatId) ?? [])
      }, 1000)
    })
  },
  getMessagesCount(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(messages.get(chatId)?.length ?? 0)
      }, 1000)
    })
  },
  postMessage(chatId, input, user) {
    return new Promise(resolve => {
      setTimeout(() => {
        const message = {
          id: generateId(),
          input,
          localeTimeString: new Date().toISOString(),
          user,
        }
        const existingMessages = messages.get(chatId) ?? []
        messages.set(chatId, [...existingMessages, message])
        resolve()
      }, 1000)
    })
  },
}

export default inMemoryMessageService
