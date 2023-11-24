import {
  addDoc,
  collection,
  doc,
  documentId,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientRepo } from "@/configs/firebase/client"
import type { Chat } from "@/types/Chat"

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
  const ref = collection(clientRepo, "chats")
  return ref.withConverter(chatConverter)
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

export async function createChat(adminId: string) {
  const chatRef = await addDoc(chatsRef(), {
    adminId,
    id: documentId(),
    participantsIds: [adminId],
  })
  return chatRef.id
}

export async function getParticipatingChatCount(userId: string) {
  const snapshot = await getCountFromServer(participatingChatsRef(userId))
  const aggregate = snapshot.data()
  return aggregate.count
}

export async function getParticipatingChats(userId: string) {
  const snapshot = await getDocs(participatingChatsRef(userId))
  return snapshot.docs.map(doc => doc.data())
}
