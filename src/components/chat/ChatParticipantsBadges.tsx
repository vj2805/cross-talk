"use client"

import { useParticipants } from "@hooks/useParticipants"
import { Spinner } from "@ui"
import { cn } from "@utilities"

interface ChatParticipantsBadgesProps {
  chatId: string
}

export const ChatParticipantsBadges: React.FC<ChatParticipantsBadgesProps> = ({
  chatId,
}) => {
  const [participants, admin, loading] = useParticipants(chatId)

  if (loading) {
    return <Spinner />
  }

  return (
    <div className={cn("m-5", "p-2", "border rounded-xl")}>
      <div
        className={cn(
          "p-2",
          "flex flex-wrap justify-center md:justify-start items-center gap-2"
        )}
      ></div>
      ChatMembersBadges
    </div>
  )
}
