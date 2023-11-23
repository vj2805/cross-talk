import type { ParticipantService } from "@/types/ParticipantService"
import { default as participantService } from "./internal/firebase/participant"

export const {
  addParticipantToChat,
  isUserParticipantOfChat,
}: ParticipantService = participantService
