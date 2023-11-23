"use client"

import type { User } from "next-auth"
import { useParticipatingChats } from "@/hooks/useParticipatingChats"
import { ErrorAlert, Spinner } from "../ui"
import { ChatRow } from "./ChatRow"
import { EmptyChatList } from "./EmptyChatList"

interface ChatListProps {
  user: User
}

export const ChatList: React.FC<ChatListProps> = ({ user }) => {
  const [
    participatingChats,
    participatingChatsStatus,
    participatingChatsError,
  ] = useParticipatingChats(user.id)

  if (participatingChatsStatus === "loading") {
    return <Spinner />
  }

  if (participatingChatsStatus === "error") {
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
