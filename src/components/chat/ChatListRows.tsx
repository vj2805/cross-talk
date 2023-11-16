"use client"

import { showErrorToast } from "@/components/ui"
import { MessageSquareIcon } from "@/components/ui/icons"
import { useParticipatingChats } from "@/hooks/useParticipatingChats"
import { useUser } from "@/hooks/useUser"
import { cn } from "@/utilities/string"
import { ChatRow } from "./ChatRow"
import { CreateChatButton } from "./CreateChatButton"
import type { Chat } from "@/types/Chat"

interface ChatListRowsProps {
  initialChats: Chat[]
}

export const ChatListRows: React.FC<ChatListRowsProps> = ({ initialChats }) => {
  const user = useUser()
  const chats = useParticipatingChats(user?.id!, initialChats)

  if (chats.status === "loading") {
    return null
  }

  if (chats.status === "error") {
    return void showErrorToast(chats.error)
  }

  if (chats().length === 0) {
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
      {chats().map(chat => (
        <ChatRow
          key={chat.id}
          chatId={chat.id}
        />
      ))}
    </div>
  )
}
