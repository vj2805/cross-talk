import createParticipantService from "./FirestoreParticipantService"
import type { ParticipantService } from "./ParticipantService"

export type { Participant } from "./Participant"

export const {}: ParticipantService = createParticipantService()
