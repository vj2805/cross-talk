import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore"
import { clientRepo } from "@/backend/firebase/client"
import { chatRef } from "./chat"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { Participant } from "@/types/Participant"
import type { ParticipantService } from "@/types/ParticipantService"

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

function participantsRef() {
  return collection(clientRepo, "users").withConverter(participantConverter)
}

function participantRef(userId: string) {
  return doc(participantsRef(), userId)
}

const firebaseParticipantService: ParticipantService = {
  async addParticipantToChat(chatId, participantId) {
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
}

export default firebaseParticipantService
