"use client"

import { Spinner, showToast } from "@/components/ui"
import { useMessages } from "@/hooks/useMessages"
import { ChatMessagesList } from "./ChatMessagesList"
import { StartConversation } from "./StartConversation"
import type { User } from "next-auth"

interface ChatMessagesProps {
  chatId: string
  user: User
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ chatId, user }) => {
  const [messages, status, error] = useMessages(chatId)

  if (status === "loading") {
    return <Spinner />
  }

  if (status === "error") {
    return void showToast({ error })
  }

  if (messages.length === 0) {
    return <StartConversation />
  }

  return (
    <ChatMessagesList
      messages={messages}
      user={user}
    />
  )
}
