import { subscribeWithSelector } from "zustand/middleware"
import { createStore } from "zustand/vanilla"
import { generateId } from "@/utilities/string"
import type { Chat } from "@/types/Chat"
import type { Message } from "@/types/Message"
import type { MessageService } from "@/types/MessageService"

const {
  getState: getMessages,
  setState: setMessages,
  subscribe,
} = createStore<Record<Chat["id"], Message[]>>()(
  subscribeWithSelector(() => ({}))
)

const inMemoryMessageService: MessageService = {
  getLastMessage(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getMessages()[chatId]?.at(0))
      }, 1000)
    })
  },
  getMessages(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getMessages()[chatId] ?? [])
      }, 1000)
    })
  },
  getMessagesCount(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getMessages()[chatId]?.length ?? 0)
      }, 1000)
    })
  },
  postMessage(chatId, input, user) {
    return new Promise(resolve => {
      setTimeout(() => {
        setMessages(store => ({
          [chatId]: (store[chatId] ?? []).toSpliced(-1, 0, {
            id: generateId(),
            input,
            localeTimeString: new Date().toISOString(),
            user,
          }),
        }))
        resolve()
      }, 1000)
    })
  },
  subscribeToLastMessage(chatId, onChange) {
    return subscribe(store => store[chatId]?.[0], onChange)
  },
  subscribeToMessages(chatId, onChange) {
    return subscribe(store => store[chatId] ?? [], onChange)
  },
}

export default inMemoryMessageService
