"use client"

import { useParticipatingChats } from "@/hooks/useParticipatingChats"
import { Spinner, showToast } from "../ui"
import { ChatRow } from "./ChatRow"
import { EmptyChatList } from "./EmptyChatList"
import type { User } from "@/types/User"

interface ChatListProps {
  user: User
}

export const ChatList: React.FC<ChatListProps> = ({ user }) => {
  const [chats, status, error] = useParticipatingChats(user.id)

  if (status === "loading") {
    return <Spinner />
  }

  if (status === "error") {
    return void showToast({ error })
  }

  if (chats.length === 0) {
    return <EmptyChatList />
  }

  return chats.map(chat => (
    <ChatRow
      key={chat.id}
      chatId={chat.id}
    />
  ))
}
