"use client"

import type { Chat } from "@/types/Chat"
import { cn } from "@/utilities/string"
import { ChatParticipantBadge } from "./ChatParticipantBadge"

interface ChatParticipantsBadgesProps {
  chat: Chat
}

export function ChatParticipantsBadges({ chat }: ChatParticipantsBadgesProps) {
  return (
    <div
      className={cn(
        "m-5",
        "p-4",
        "border rounded-xl",
        "flex flex-wrap justify-center md:justify-start items-center gap-2"
      )}
    >
      {chat?.participantsIds?.map(participantId => (
        <ChatParticipantBadge
          key={participantId}
          participantId={participantId}
          isAdmin={participantId === chat.adminId}
        />
      ))}
    </div>
  )
}
