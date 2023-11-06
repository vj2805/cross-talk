"use client"

import { useParticipatingChats } from "@hooks"
import { useUser } from "@hooks"
import type { Chat } from "@types"

interface ChatListRowsProps {
  initialChats: Chat[]
}

export const ChatListRows: React.FC<ChatListRowsProps> = ({ initialChats }) => {
  const [user] = useUser()
  const [chats] = useParticipatingChats(user?.uid, initialChats)
  return <div>ChatListRow</div>
}
