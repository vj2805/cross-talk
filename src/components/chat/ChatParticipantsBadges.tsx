"use client"

import { Spinner, showErrorToast } from "@/components/ui"
import { useParticipantsIds } from "@/hooks/useParticipantsIds"
import { cn } from "@/utilities/string"

interface ChatParticipantsBadgesProps {
  chatId: string
}

export const ChatParticipantsBadges: React.FC<ChatParticipantsBadgesProps> = ({
  chatId,
}) => {
  const participantsIds = useParticipantsIds(chatId)

  if (participantsIds.status === "loading") {
    return <Spinner />
  }

  if (participantsIds.status === "error") {
    return void showErrorToast(participantsIds.error)
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
