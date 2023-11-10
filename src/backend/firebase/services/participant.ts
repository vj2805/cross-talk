import { collection, doc } from "firebase/firestore"
import { clientRepo } from "../client"
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

const firebaseParticipantService: ParticipantService = {}

export default firebaseParticipantService
