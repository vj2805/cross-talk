"use client"

import { useChat } from "@/hooks/useChat"
import { ErrorAlert, Skeleton } from "../ui"
import { ChatAdminControls } from "./ChatAdminControls"
import { ChatParticipantsBadges } from "./ChatParticipantsBadges"

interface ChatControlsProps {
  chatId: string
  userId: string
}

export function ChatControls({ chatId, userId }: ChatControlsProps) {
  const [chat, isChatLoading, chatError] = useChat(chatId)

  if (isChatLoading) {
    return (
      <>
        <div className="m-5 mb-0 flex justify-end space-x-2">
          <Skeleton className="h-10 w-44" />
          <Skeleton className="h-10 w-36" />
          <Skeleton className="h-10 w-28" />
        </div>
        <div className="m-5 p-4 border rounded-xl flex flex-wrap justify-center md:justify-start items-center gap-2">
          {Array(4)
            .fill(null)
            .map((_, idx) => (
              <Skeleton
                key={idx}
                className="h-14 w-56 rounded-full"
              />
            ))}
        </div>
      </>
    )
  }

  if (chatError) {
    return <ErrorAlert error={chatError} />
  }

  return (
    <>
      {userId === chat?.adminId && <ChatAdminControls chat={chat} />}
      <ChatParticipantsBadges chat={chat} />
    </>
  )
}
