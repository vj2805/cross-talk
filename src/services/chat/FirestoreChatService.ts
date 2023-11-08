import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { clientRepo } from "@firebase"
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

const getParticipatingChats: ChatService["getParticipatingChats"] = async (
  userId: string
) => {
  const snapshot = await getDocs(participatingChatsRef(userId))
  return snapshot.docs.map(doc => doc.data())
}

export function createFirestoreChatService(): ChatService {
  return {
    createChat,
    getParticipatingChats,
  }
}
