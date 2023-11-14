"use client"

import { Spinner, showErrorToast } from "@/components/ui"
import { useChat } from "@/hooks/useChat"
import { cn } from "@/utilities/string"

interface ChatParticipantsBadgesProps {
  chatId: string
}

export const ChatParticipantsBadges: React.FC<ChatParticipantsBadgesProps> = ({
  chatId,
}) => {
  const chat = useChat(chatId)

  if (chat.status === "loading") {
    return <Spinner />
  }

  if (chat.status === "error") {
    return void showErrorToast(chat.error)
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
