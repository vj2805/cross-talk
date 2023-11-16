"use client"

import { useParticipatingChats } from "@/hooks/useParticipatingChats"
import { Spinner, showErrorToast } from "../ui"
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
  const chats = useParticipatingChats(user.id, initialChats)

  if (chats.status === "loading") {
    return <Spinner />
  }

  if (chats.status === "error") {
    return void showErrorToast(chats.error)
  }

  if (chats.data.length === 0) {
    return <WelcomeToChats />
  }

  return chats.data.map(chat => (
    <ChatRow
      key={chat.id}
      chatId={chat.id}
    />
  ))
}
