import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import { clientRepo } from "@/backend/firebase/client"
import type { Chat } from "@/types/Chat"
import type { ChatService } from "@/types/ChatService"
import type { FirestoreDataConverter } from "firebase/firestore"

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

export function chatRef(chatId: string) {
  return doc(chatsRef(), chatId)
}

function participatingChatsRef(participantId: string) {
  return query(
    chatsRef(),
    where("participantsIds", "array-contains", participantId)
  )
}

const firebaseChatService: ChatService = {
  async createChat({ adminId }) {
    const chatRef = await addDoc(chatsRef(), {
      adminId,
      id: "",
      participantsIds: [adminId],
    })
    return chatRef.id
  },
  async getParticipatingChats({ userId }) {
    const snapshot = await getDocs(participatingChatsRef(userId))
    return snapshot.docs.map(doc => doc.data())
  },
  subscribeToChat({ chatId }, onChange, onError) {
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
  },
  subscribeToParticipatingChats({ userId }, onChange, onError) {
    return onSnapshot(
      participatingChatsRef(userId),
      snapshot => onChange(snapshot.docs.map(doc => doc.data())),
      onError
    )
  },
}

export default firebaseChatService
