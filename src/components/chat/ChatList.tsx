"use client"

import { useParticipatingChats } from "@/hooks/useParticipatingChats"
import { Spinner, showToast } from "../ui"
import { ChatRow } from "./ChatRow"
import { WelcomeToChats } from "./WelcomeToChats"
import type { User } from "@/types/User"
import type { Chat } from "@/types/Chat"

interface ChatListProps {
  initialChats: Chat[]
  user: User
}

export const ChatList: React.FC<ChatListProps> = async ({
  initialChats,
  user,
}) => {
  const [chats, status, error] = useParticipatingChats(user.id, initialChats)

  if (status === "loading") {
    return <Spinner />
  }

  if (status === "error") {
    return void showToast({ error })
  }

  if (chats.length === 0) {
    return <WelcomeToChats />
  }

  return chats.map(chat => (
    <ChatRow
      key={chat.id}
      chatId={chat.id}
    />
  ))
}
