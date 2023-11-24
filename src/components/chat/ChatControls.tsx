"use client"

import { useChat } from "@/hooks/useChat"
import { ErrorAlert } from "../ui"
import { ChatAdminControls } from "./ChatAdminControls"
import { ChatControlsSkeleton } from "./ChatControlsSkeleton"
import { ChatParticipantsBadges } from "./ChatParticipantsBadges"

interface ChatControlsProps {
  chatId: string
  userId: string
}

export function ChatControls({ chatId, userId }: ChatControlsProps) {
  const [chat, isChatLoading, chatError] = useChat(chatId)

  if (isChatLoading) {
    return <ChatControlsSkeleton />
  }

  if (chatError) {
    return <ErrorAlert error={chatError} />
  }

  return (
    <>
      {userId === chat.adminId && <ChatAdminControls chat={chat} />}
      <ChatParticipantsBadges chat={chat} />
    </>
  )
}
