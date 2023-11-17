"use client"

import { useChat } from "@/hooks/useChat"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import { Spinner, showErrorToast } from "../ui"
import { AdminControls } from "./AdminControls"
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
    return void showErrorToast(error)
  }

  return (
    <>
      {user.id === chat.adminId && <AdminControls chat={chat} />}
      <ChatParticipantsBadges chat={chat} />
    </>
  )
}
