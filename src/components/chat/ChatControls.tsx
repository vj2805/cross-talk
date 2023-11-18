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
  const [chat, status, error] = useChat(chatId)

  if (status === "loading") {
    return <Spinner />
  }

  if (status === "error") {
    return <ErrorAlert error={error} />
  }

  return (
    <>
      {userId === chat.adminId && <ChatAdminControls chat={chat} />}
      <ChatParticipantsBadges chat={chat} />
    </>
  )
}
