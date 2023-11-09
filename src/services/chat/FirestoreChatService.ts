import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"
import { clientRepo } from "@backend/firebase"
import { ChatError } from "./Chat"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { Chat } from "./Chat"
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

function chatRef(chatId: string) {
  return doc(chatsRef(), chatId)
}

function participatingChatsRef(participantId: string) {
  return query(
    chatsRef(),
    where("participantsIds", "array-contains", participantId)
  )
}

const createChat: ChatService["createChat"] = async adminId => {
  const chatRef = await addDoc(chatsRef(), {
    adminId: adminId,
    id: "",
    participantsIds: [adminId],
  })
  return chatRef.id
}

const getParticipantsIds: ChatService["getParticipantsIds"] = async chatId => {
  const chat = await getDoc(chatRef(chatId))
  const data = chat.data()
  if (!data) {
    throw new ChatError(chatId, "Does Not Exist")
  }
  return data.participantsIds
}

const getParticipatingChats: ChatService["getParticipatingChats"] =
  async userId => {
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
