import { generateId } from "@utilities"
import type { Message } from "./Message"
import type { MessageService } from "./MessageService"

const messages: Map<string, Message[]> = new Map()

const getLastMessage: MessageService["getLastMessage"] = chatId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(messages.get(chatId)?.at(0))
    }, 1000)
  })
}

const getMessages: MessageService["getMessages"] = async chatId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(messages.get(chatId) ?? [])
    }, 1000)
  })
}

const getMessagesCount: MessageService["getMessagesCount"] = chatId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(messages.get(chatId)?.length ?? 0)
    }, 1000)
  })
}

const postMessage: MessageService["postMessage"] = (chatId, input, user) => {
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
}

export default function createFirestoreMessageService(): MessageService {
  return {
    getLastMessage,
    getMessages,
    getMessagesCount,
    postMessage,
  }
}
