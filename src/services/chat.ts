import {
  addDoc,
  collection,
  doc,
  documentId,
  getCountFromServer,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientRepo } from "@/backend/firebase/client"
import type { Chat } from "@/types/Chat"
import type { ChatService } from "@/types/ChatService"

const chatConverter: FirestoreDataConverter<Chat> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      adminId: data.adminId,
      id: snapshot.id,
      participantsIds: data.participantsIds,
    }
  },
  toFirestore(chat) {
    return {
      adminId: chat.adminId,
      participantsIds: chat.participantsIds,
    }
  },
}

export function chatsRef() {
  return collection(clientRepo, "chats").withConverter(chatConverter)
}

export function chatRef(chatId: string) {
  return doc(chatsRef(), chatId)
}

export function participatingChatsRef(participantId: string) {
  return query(
    chatsRef(),
    where("participantsIds", "array-contains", participantId)
  )
}

export const createChat: ChatService["createChat"] = async ({ adminId }) => {
  const chatRef = await addDoc(chatsRef(), {
    adminId,
    id: documentId(),
    participantsIds: [adminId],
  })
  return chatRef.id
}

export const getParticipatingChatCount: ChatService["getParticipatingChatCount"] =
  async ({ userId }) => {
    const snapshot = await getCountFromServer(participatingChatsRef(userId))
    const aggregate = snapshot.data()
    return aggregate.count
  }

export const getParticipatingChats: ChatService["getParticipatingChats"] =
  async ({ userId }) => {
    const snapshot = await getDocs(participatingChatsRef(userId))
    return snapshot.docs.map(doc => doc.data())
  }

export const subscribeToChat: ChatService["subscribeToChat"] = (
  { chatId },
  onChange,
  onError
) => {
  return onSnapshot(
    chatRef(chatId),
    snapshot => {
      const chat = snapshot.data()
      if (!chat) {
        return
      }
      return onChange(chat)
    },
    onError
  )
}

export const subscribeToParticipatingChats: ChatService["subscribeToParticipatingChats"] =
  ({ userId }, onChange, onError) => {
    return onSnapshot(
      participatingChatsRef(userId),
      snapshot => onChange(snapshot.docs.map(doc => doc.data())),
      onError
    )
  }
