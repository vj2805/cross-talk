import createParticipantService from "@/backend/firebase/FirestoreParticipantService"
import type { ParticipantService } from "@/types/ParticipantService"

export type { Participant } from "@/types/Participant"

export const {}: ParticipantService = createParticipantService()
