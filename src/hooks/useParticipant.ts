import type { User } from "next-auth"
import { useDocumentData } from "react-firebase-hooks/firestore"
import { userRef } from "@/services/user"
import type { Observable } from "@/types/Observable"

export function useParticipant(participantId: string) {
  return useDocumentData(userRef(participantId)) as unknown as Observable<User>
}
