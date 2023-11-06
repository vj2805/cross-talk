import type { Participant } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"

export const participantConverter: FirestoreDataConverter<Participant> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      email: data.email,
      id: snapshot.id,
      image: data.image,
    }
  },
  toFirestore(participant) {
    delete participant.id
    return participant
  },
}
