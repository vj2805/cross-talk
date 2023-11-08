import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"
import { clientRepo } from "@firebase"
import { ChatError } from "./ChatError"
import type { Chat } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { ChatService } from "./ChatService"

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

function chatsRef() {
  return collection(clientRepo, "chats").withConverter(chatConverter)
}

const createChat: ChatService["createChat"] = async adminId => {
  const chatRef = await addDoc(chatsRef(), {
    adminId: adminId,
    id: "",
    participantsIds: [adminId],
  })
  return chatRef.id
}

function chatRef(chatId: string) {
  return doc(chatsRef(), chatId)
}

const getParticipantsIds: ChatService["getParticipantsIds"] = async (
  chatId: string
) => {
  const chat = await getDoc(chatRef(chatId))
  const data = chat.data()
  if (!data) {
    throw new ChatError(chatId, "Does Not Exist")
  }
  return data.participantsIds
}

function participatingChatsRef(participantId: string) {
  return query(
    chatsRef(),
    where("participantsIds", "array-contains", participantId)
  )
}

const getParticipatingChats: ChatService["getParticipatingChats"] = async (
  userId: string
) => {
  const snapshot = await getDocs(participatingChatsRef(userId))
  return snapshot.docs.map(doc => doc.data())
}

export function createFirestoreChatService(): ChatService {
  return {
    createChat,
    getParticipantsIds,
    getParticipatingChats,
  }
}
