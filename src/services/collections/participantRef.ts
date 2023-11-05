import { collection, doc } from "firebase/firestore"
import type { Participant } from "@types"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientRepo } from "~/firebase"

const participantConverter: FirestoreDataConverter<Participant> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      email: data.email,
      id: snapshot.id,
      image: data.image,
    }
  },
  toFirestore(participant) {
    return participant
  },
}

function participantsRef() {
  return collection(clientRepo, "users").withConverter(participantConverter)
}

export function participantRef(userId: string) {
  return doc(participantsRef(), userId)
}
