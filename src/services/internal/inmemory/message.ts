import { subscribeWithSelector } from "zustand/middleware"
import { createStore } from "zustand/vanilla"
import { generateId } from "@/utilities/string"
import {
  getInMemoryState,
  setInMemoryState,
  subscribeToInMemoryStore,
} from "./store"
import type { Chat } from "@/types/Chat"
import type { Message } from "@/types/Message"
import type { MessageService } from "@/types/MessageService"

const inMemoryMessageService: MessageService = {
  getLastMessage(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getInMemoryState("messages")[chatId]?.at(0))
      }, 1000)
    })
  },
  getMessages(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getInMemoryState("messages")[chatId] ?? [])
      }, 1000)
    })
  },
  getMessagesCount(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getInMemoryState("messages")[chatId]?.length ?? 0)
      }, 1000)
    })
  },
  postMessage(chatId, input, user) {
    return new Promise(resolve => {
      setTimeout(() => {
        setInMemoryState("messages", messages => ({
          ...messages,
          [chatId]: (messages[chatId] ?? []).toSpliced(-1, 0, {
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
    return subscribeToInMemoryStore(
      "messages",
      messages => messages[chatId]?.[0],
      onChange,
      {
        fireImmediately: true,
      }
    )
  },
  subscribeToMessages(chatId, onChange) {
    return subscribeToInMemoryStore(
      "messages",
      messages => messages[chatId] ?? [],
      onChange,
      {
        fireImmediately: true,
      }
    )
  },
}

export default inMemoryMessageService
