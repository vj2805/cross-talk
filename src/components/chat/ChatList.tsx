"use client"

import type { User } from "next-auth"
import { useParticipatingChats } from "@/hooks/useParticipatingChats"
import { ErrorAlert } from "../ui"
import { ChatListRow } from "./ChatListRow"
import { ChatListSkeleton } from "./ChatListSkeleton"
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
    return <ChatListSkeleton />
  }

  if (participatingChatsError) {
    return <ErrorAlert error={participatingChatsError} />
  }

  if (participatingChats.length === 0) {
    return <WelcomeToChatPanel />
  }

  return participatingChats.map(chat => (
    <ChatListRow
      key={chat.id}
      chatId={chat.id}
    />
  ))
}
