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
  const [messages, status, error] = useMessages(chatId)

  if (status === "loading") {
    return <Spinner />
  }

  if (status === "error") {
    return <ErrorAlert error={error} />
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
