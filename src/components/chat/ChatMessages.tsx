"use client"

import type { User } from "next-auth"
import { useMessages } from "@/hooks/useMessages"
import { ErrorAlert, Skeleton } from "../ui"
import { ChatMessagesList } from "./ChatMessagesList"
import { ChatConversePanel } from "./StartConversationPanel"

interface ChatMessagesProps {
  chatId: string
  user: User
}

export function ChatMessages({ chatId, user }: ChatMessagesProps) {
  const [messages, isMessagesLoading, messagesError] = useMessages(chatId)

  if (isMessagesLoading) {
    return <Skeleton className="h-full w-full" />
  }

  if (messagesError) {
    return <ErrorAlert error={messagesError} />
  }

  if (messages.length === 0) {
    return <ChatConversePanel />
  }

  return (
    <ChatMessagesList
      messages={messages}
      user={user}
    />
  )
}
