"use client"

import type { User } from "next-auth"
import { useMessages } from "@/hooks/useMessages"
import { ErrorAlert, Spinner } from "../ui"
import { ChatMessagesList } from "./ChatMessagesList"
import { StartConversation } from "./StartConversation"

interface ChatMessagesProps {
  chatId: string
  user: User
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ chatId, user }) => {
  const [messages, messagesStatus, messagesError] = useMessages(chatId)

  if (messagesStatus === "loading") {
    return <Spinner />
  }

  if (messagesStatus === "error") {
    return <ErrorAlert error={messagesError} />
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
