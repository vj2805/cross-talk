"use client"

import type { Chat } from "@/types/Chat"
import { cn } from "@/utilities/string"
import { ParticipantBadge } from "./ParticipantBadge"

interface ChatParticipantsBadgesProps {
  chat: Chat
}

export const ChatParticipantsBadges: React.FC<ChatParticipantsBadgesProps> = ({
  chat,
}) => (
  <div className={cn("m-5", "p-2", "border rounded-xl")}>
    <div
      className={cn(
        "p-2",
        "flex flex-wrap justify-center md:justify-start items-center gap-2"
      )}
    >
      {chat.participantsIds.map(participantId => (
        <ParticipantBadge
          key={participantId}
          participantId={participantId}
          isAdmin={participantId === chat.adminId}
        />
      ))}
    </div>
  </div>
)
