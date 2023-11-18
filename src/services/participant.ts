import { default as participantService } from "./internal/firebase/participant"
import type { ParticipantService } from "@/types/ParticipantService"

export const {
  addParticipantToChat,
  isUserParticipantOfChat,
}: ParticipantService = participantService
