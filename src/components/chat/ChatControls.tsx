"use client"

import { useChat } from "@/hooks/useChat"
import { useUser } from "@/hooks/useUser"
import { Spinner, showErrorToast } from "../ui"
import { AdminControls } from "./AdminControls"
import { ChatParticipantsBadges } from "./ChatParticipantsBadges"

interface ChatControlsProps {
  chatId: string
}

export const ChatControls: React.FC<ChatControlsProps> = ({ chatId }) => {
  const user = useUser()
  const chat = useChat(chatId)

  if (!user) {
    return null
  }

  if (chat.status === "loading") {
    return <Spinner />
  }

  if (chat.status === "error") {
    return void showErrorToast(chat.error)
  }

  return (
    <>
      {user.id === chat.data.adminId && <AdminControls chat={chat.data} />}
      <ChatParticipantsBadges chat={chat.data} />
    </>
  )
}
