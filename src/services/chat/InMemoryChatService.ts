import { useEffect, useState, useSyncExternalStore } from "react"
import { generateId } from "@utilities"
import type { Chat } from "@types"
import type { ChatService } from "./ChatService"

let chats: Chat[] = []

const getChats = () => chats

const listeners = new Set<() => void>()

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const notify = () => listeners.forEach(listener => listener())

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
      notify()
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

const useParticipatingChats: ChatService["useParticipatingChats"] = (
  userId,
  initalChats
) => {
  const chats = useSyncExternalStore(subscribe, getChats)
  const [observable, setObservable] = useState<Model.Observable<Chat[]>>([
    initalChats,
    true,
    undefined,
  ])

  useEffect(() => {
    setObservable(([chats]) => [chats, true, undefined])
    getParticipatingChats(userId)
      .then(chats => setObservable([chats, false, undefined]))
      .catch(reason => setObservable([undefined, false, Error(reason)]))
      .finally(() =>
        setObservable(([chats, _, error]) => [chats, false, error])
      )
  }, [chats, userId])

  return observable
}

export default function createInMemoryChatService(): ChatService {
  return {
    createChat,
    getParticipatingChats,
    useParticipatingChats,
  }
}
