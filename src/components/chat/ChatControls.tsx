"use client"

import { useChat } from "@/hooks/useChat"
import { useUser } from "@/hooks/useUser"
import { Spinner, showErrorToast } from "../ui"
import { ChatParticipantsBadges } from "./ChatParticipantsBadges"
import { AdminControls } from "./AdminControls"

interface ChatControlsProps {
  chatId: string
}

export const ChatControls: React.FC<ChatControlsProps> = ({ chatId }) => {
  const user = useUser()
  const chat = useChat(chatId)

  if (chat.status === "loading") {
    return <Spinner />
  }

  if (chat.status === "error") {
    return void showErrorToast(chat.error)
  }

  return (
    <>
      {user?.id === chat.value.adminId && <AdminControls chat={chat.value} />}
      <ChatParticipantsBadges chat={chat.value} />
    </>
  )
}
