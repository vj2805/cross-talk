"use client"

import { useParticipatingChats } from "@hooks"
import { useUser } from "@hooks"
import { cn } from "@utilities"
import { MessageSquareIcon } from "@icons"
import { Spinner } from "@ui"
import { CreateChatButton } from "./CreateChatButton"
import { ChatRow } from "./ChatRow"
import type { Chat } from "@types"

interface ChatListRowsProps {
  initialChats: Chat[]
}

export const ChatListRows: React.FC<ChatListRowsProps> = ({ initialChats }) => {
  const [user] = useUser()
  const [chats] = useParticipatingChats(user?.uid, initialChats)

  if (!chats) {
    return <Spinner />
  }

  if (chats.length === 0) {
    return (
      <div
        className={cn(
          "pt-40",
          "flex flex-col justify-center items-center space-y-2"
        )}
      >
        <MessageSquareIcon className="h-10 w-10" />
        <h1 className="text-5xl font-extralight">Welcome!</h1>
        <h2 className="pb-10">
          Let&apos;s get you started by creating your first chat!
        </h2>
        <CreateChatButton large />
      </div>
    )
  }

  return (
    <div>
      {chats.map(chat => (
        <ChatRow
          key={chat.id}
          chatId={chat.id}
        />
      ))}
    </div>
  )
}
