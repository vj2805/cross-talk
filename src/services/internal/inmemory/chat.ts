import { createStore } from "zustand/vanilla"
import { subscribeWithSelector } from "zustand/middleware"
import { shallow } from "zustand/shallow"
import { generateId } from "@/utilities/string"
import type { Chat } from "@/types/Chat"
import type { ChatService } from "@/types/ChatService"

const {
  getState: getChats,
  setState: setChats,
  subscribe,
} = createStore<{
  chats: Chat[]
}>()(
  subscribeWithSelector(() => ({
    chats: [] as Chat[],
  }))
)

const inMemoryChatSerice: ChatService = {
  createChat(adminId) {
    return new Promise(resolve => {
      setTimeout(() => {
        const id = generateId()
        setChats(({ chats }) => ({
          chats: chats
            .toSpliced(-1, 0, {
              adminId,
              id,
              participantsIds: [adminId],
            })
            .sort((x, y) => x.id.localeCompare(y.id)),
        }))
        resolve(id)
      }, 1000)
    })
  },
  getParticipantsIds(chatId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const chat = getChats().chats.find(chat => chat.id === chatId)
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
          getChats().chats.filter(chat => chat.participantsIds.includes(userId))
        )
      }, 1000)
    })
  },
  subscribeToChat(chatId, onChange, onError) {
    return subscribe(
      ({ chats }) => chats.find(chat => chat.id === chatId),
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
    return subscribe(
      ({ chats }) =>
        chats.filter(chat => chat.participantsIds.includes(userId)),
      onChange,
      {
        equalityFn: shallow,
        fireImmediately: true,
      }
    )
  },
}

export default inMemoryChatSerice
