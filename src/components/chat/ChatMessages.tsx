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
  const [messages, status, error] = useMessages(chatId, initialMessages)

  if (status === "loading") {
    return <Spinner />
  }

  if (status === "error") {
    return void showErrorToast(error)
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
