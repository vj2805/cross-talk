import { useEffect, useState } from "react"
import { generateId } from "@utilities"
import type { Chat } from "@types"
import type { ChatService } from "./ChatService"

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

const useParticipatingChats: ChatService["useParticipatingChats"] = (
  userId,
  initalChats
) => {
  const [observable, setObservable] = useState<
    Model.Observable<Chat[], Chat[]>
  >([initalChats, "loading"])

  useEffect(() => {
    getParticipatingChats(userId)
      .then(chats => setObservable([chats, "idle"]))
      .catch(reason => setObservable([Error(reason), "error"]))
  }, [userId])

  return observable
}

export function createInMemoryChatService(): ChatService {
  return {
    createChat,
    getParticipatingChats,
    useParticipatingChats,
  }
}
