"use client"

import { Spinner, showErrorToast } from "@/components/ui"
import { useMessages } from "@/hooks/useMessages"
import { ChatMessagesList } from "./ChatMessagesList"
import { StartConversation } from "./StartConversation"
import type { Message } from "@/types/Message"
import type { User } from "next-auth"

interface ChatMessagesProps {
  chatId: string
  initialMessages: Message[]
  user: User
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  chatId,
  initialMessages,
  user,
}) => {
  const messages = useMessages(chatId, initialMessages)

  if (messages.status === "loading") {
    return <Spinner />
  }

  if (messages.status === "error") {
    return void showErrorToast(messages.error)
  }

  if (messages.data.length === 0) {
    return <StartConversation />
  }

  return (
    <ChatMessagesList
      messages={messages.data}
      user={user}
    />
  )
}
