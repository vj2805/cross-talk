import { createFirestoreParticipantService as createParticipantService } from "@backend/firebase/participant"
import type { ParticipantService } from "@/types/ParticipantService"

export type { Participant } from "@/types/Participant"

export const {}: ParticipantService = createParticipantService()
