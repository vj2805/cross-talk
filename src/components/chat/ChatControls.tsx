"use client"

import { useChat } from "@/hooks/useChat"
import { cn } from "@/utilities/string"
import { ErrorAlert, Skeleton } from "../ui"
import { ChatAdminControls } from "./ChatAdminControls"
import { ChatParticipantsBadges } from "./ChatParticipantsBadges"

interface ChatControlsProps {
  chatId: string
  userId: string
}

export const ChatControls: React.FC<ChatControlsProps> = ({
  chatId,
  userId,
}) => {
  const [chat, chatStatus, chatError] = useChat(chatId)

  if (chatStatus === "loading") {
    return (
      <>
        <div className={cn("m-5 mb-0", "flex justify-end space-x-2")}>
          <Skeleton className={cn("h-10 w-44")} />
          <Skeleton className={cn("h-10 w-36")} />
          <Skeleton className={cn("h-10 w-28")} />
        </div>
        <div
          className={cn(
            "m-5",
            "p-4",
            "border rounded-xl",
            "flex flex-wrap justify-center md:justify-start items-center gap-2"
          )}
        >
          <Skeleton className={cn("h-14 w-56", "rounded-full")} />
          <Skeleton className={cn("h-14 w-56", "rounded-full")} />
          <Skeleton className={cn("h-14 w-56", "rounded-full")} />
          <Skeleton className={cn("h-14 w-56", "rounded-full")} />
        </div>
      </>
    )
  }

  if (chatStatus === "error") {
    return <ErrorAlert error={chatError} />
  }

  return (
    <>
      {userId === chat.adminId && <ChatAdminControls chat={chat} />}
      <ChatParticipantsBadges chat={chat} />
    </>
  )
}
