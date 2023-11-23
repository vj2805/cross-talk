import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientRepo } from "@/configs/firebase/client"
import type { Participant } from "@/types/Participant"
import type { ParticipantService } from "@/types/ParticipantService"
import { chatRef } from "./chat"

const participantConverter: FirestoreDataConverter<Participant> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      email: data.email,
      id: snapshot.id,
      image: data.image,
      name: data.name,
    }
  },
  toFirestore(participant) {
    return {
      email: participant.email,
      image: participant.image,
      name: participant.name,
    }
  },
}

export function participantsRef() {
  const ref = collection(clientRepo, "users")
  return ref.withConverter(participantConverter)
}

export function participantRef(userId: string) {
  return doc(participantsRef(), userId)
}

export const {
  addParticipantToChat,
  isUserParticipantOfChat,
}: ParticipantService = {
  async addParticipantToChat({ chatId, participantId }) {
    const participant = await getDoc(participantRef(participantId))
    if (!participant.exists()) {
      throw new Error(`User with id (${participantId}) does not exist!`)
    }
    const chat = await getDoc(chatRef(chatId))
    if (!chat.exists()) {
      throw new Error(`Chat with id (${chatId}) does not exist!`)
    }
    updateDoc(chat.ref, {
      participantsIds: arrayUnion(participantId),
    })
  },
  async isUserParticipantOfChat({ chatId, userId }) {
    const participant = await getDoc(participantRef(userId))
    if (!participant.exists()) {
      throw new Error(`User with id (${userId}) does not exist!`)
    }
    const chat = await getDoc(chatRef(chatId))
    if (!chat.exists()) {
      throw new Error(`Chat with id (${chatId}) does not exist!`)
    }
    return chat.data().participantsIds.includes(userId)
  },
}
