import { default as participantService } from "./internal/inmemory/participant"
import type { ParticipantService } from "@/types/ParticipantService"

export const { addParticipantToChat }: ParticipantService = participantService
