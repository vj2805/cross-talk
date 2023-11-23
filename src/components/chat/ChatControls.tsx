"use client"

import { useChat } from "@/hooks/useChat"
import { ErrorAlert, Spinner } from "../ui"
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
    return <Spinner />
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
