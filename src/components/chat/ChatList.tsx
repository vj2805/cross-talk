"use client"

import type { User } from "next-auth"
import { useParticipatingChats } from "@/hooks/useParticipatingChats"
import { ErrorAlert, Skeleton } from "../ui"
import { ChatRow } from "./ChatRow"
import { WelcomeToChatPanel } from "./WelcomeToChatPanel"

interface ChatListProps {
  user: User
}

export function ChatList({ user }: ChatListProps) {
  const [
    participatingChats,
    isParticipatingChatsLoading,
    participatingChatsError,
  ] = useParticipatingChats(user.id)

  if (isParticipatingChatsLoading) {
    return <Skeleton className="h-full w-full" />
  }

  if (participatingChatsError) {
    return <ErrorAlert error={participatingChatsError} />
  }

  if (participatingChats.length === 0) {
    return <WelcomeToChatPanel />
  }

  return participatingChats.map(chat => (
    <ChatRow
      key={chat.id}
      chatId={chat.id}
    />
  ))
}
