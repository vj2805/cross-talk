import { shallow } from "zustand/shallow"
import { generateId } from "@/utilities/string"
import {
  getInMemoryState,
  setInMemoryState,
  subscribeToInMemoryStore,
} from "./store"
import type { ChatService } from "@/types/ChatService"

const inMemoryChatSerice: ChatService = {
  createChat(adminId) {
    return new Promise(resolve => {
      setTimeout(() => {
        const id = generateId()
        setInMemoryState("chats", chats =>
          chats
            .toSpliced(-1, 0, {
              adminId,
              id,
              participantsIds: [adminId],
            })
            .sort((x, y) => x.id.localeCompare(y.id))
        )
        resolve(id)
      }, 1000)
    })
  },
  getParticipantsIds(chatId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const chat = getInMemoryState("chats").find(chat => chat.id === chatId)
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
        resolve(
          getInMemoryState("chats").filter(chat =>
            chat.participantsIds.includes(userId)
          )
        )
      }, 1000)
    })
  },
  subscribeToChat(chatId, onChange, onError) {
    return subscribeToInMemoryStore(
      "chats",
      chats => chats.find(chat => chat.id === chatId),
      chat => {
        if (!chat) {
          return onError(new Error(`Chat with id (${chatId}) does not exist!`))
        }
        return onChange(chat)
      },
      {
        fireImmediately: true,
      }
    )
  },
  subscribeToParticipatingChats(userId, onChange) {
    return subscribeToInMemoryStore(
      "chats",
      chats => chats.filter(chat => chat.participantsIds.includes(userId)),
      onChange,
      {
        equalityFn: shallow,
        fireImmediately: true,
      }
    )
  },
}

export default inMemoryChatSerice
