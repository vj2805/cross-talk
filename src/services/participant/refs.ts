import { collection, doc } from "firebase/firestore"
import { clientRepo } from "~/firebase"
import { participantConverter } from "./participantConverter"

function participantsRef() {
  return collection(clientRepo, "users").withConverter(participantConverter)
}

export function participantRef(userId: string) {
  return doc(participantsRef(), userId)
}
