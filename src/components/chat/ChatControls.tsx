"use client"

import { useChat } from "@/hooks/useChat"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import { Spinner, showToast } from "../ui"
import { ChatAdminControls } from "./ChatAdminControls"
import { ChatParticipantsBadges } from "./ChatParticipantsBadges"

interface ChatControlsProps {
  chatId: string
}

export const ChatControls: React.FC<ChatControlsProps> = ({ chatId }) => {
  const [user] = useRequiredUser()
  const [chat, status, error] = useChat(chatId)

  if (!user) {
    return null
  }

  if (status === "loading") {
    return <Spinner />
  }

  if (status === "error") {
    return void showToast({ error })
  }

  return (
    <>
      {user.id === chat.adminId && <ChatAdminControls chat={chat} />}
      <ChatParticipantsBadges chat={chat} />
    </>
  )
}
