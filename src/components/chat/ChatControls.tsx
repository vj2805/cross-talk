"use client"

import { useChat } from "@/hooks/useChat"
import { useUser } from "@/hooks/useUser"
import { Spinner } from "../ui"
import { AdminControls } from "./AdminControls"
import { ChatParticipantsBadges } from "./ChatParticipantsBadges"

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
    throw chat.error
  }

  return (
    <>
      {user.id === chat().adminId && <AdminControls chat={chat()} />}
      <ChatParticipantsBadges chat={chat()} />
    </>
  )
}
