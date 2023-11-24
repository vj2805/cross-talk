"use client"

import type { User } from "next-auth"
import { useParticipatingChats } from "@/hooks/useParticipatingChats"
import { ErrorAlert } from "../ui"
import { ChatRow } from "./ChatListRow"
import { EmptyChatList } from "./WelcomeToChatPanel"
import { ChatListSkeleton } from "./skeletons/ChatListSkeleton"

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
    return <EmptyChatList />
  }

  return participatingChats.map(chat => (
    <ChatRow
      key={chat.id}
      chatId={chat.id}
    />
  ))
}
