import {
  collection,
  collectionGroup,
  doc,
  query,
  where,
} from "firebase/firestore"
import { clientRepo } from "@/firebase"
import { chatRef } from "./chatRef"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { Participant } from "@/types/Participant"

const participantConverter: FirestoreDataConverter<Participant> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      chatId: data.chatId,
      email: data.email,
      image: data.image,
      isAdmin: data.isAdmin,
      timestamp: data.timestamp,
      userId: snapshot.id,
    }
  },
  toFirestore(participant) {
    return participant
  },
}

export function participantsRef(chatId: string) {
  return collection(chatRef(chatId), "participants").withConverter(
    participantConverter
  )
}

export function participantRef(chatId: string, userId: string) {
  return doc(participantsRef(chatId), userId)
}

export function chatAdminRef(chatId: string) {
  return query(participantsRef(chatId), where("isAdmin", "==", true))
}

export function participatingChatsRef(userId: string) {
  return query(
    collectionGroup(clientRepo, "participants"),
    where("userId", "==", userId)
  ).withConverter(participantConverter)
}
