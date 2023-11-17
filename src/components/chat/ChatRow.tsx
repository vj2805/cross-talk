"use client"

import { useRouter } from "@/hooks/useBuiltins"
import { useLastMessage } from "@/hooks/useLastMessage"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import { cn } from "@/utilities/string"
import { showToast } from "../ui"
import { ChatRowSkeleton } from "./ChatRowSkeleton"
import { ChatRowThatHasNoMessages } from "./ChatRowThatHasNoMessages"
import { ChatRowWithLastMessage } from "./ChatRowWithLastMessage"
import type { Chat } from "@/types/Chat"

interface ChatRowProps {
  chatId: Chat["id"]
}

export const ChatRow: React.FC<ChatRowProps> = ({ chatId }) => {
  const [lastMessage, status, error] = useLastMessage(chatId)
  const [user] = useRequiredUser()
  const router = useRouter()

  if (!user) {
    return null
  }

  if (status === "loading") {
    return <ChatRowSkeleton />
  }

  if (status === "error") {
    return void showToast({ error })
  }

  return (
    <div
      onClick={() => router.push(`/chat/${chatId}`)}
      className={cn(
        "p-5",
        "hover:bg-gray-100 dark:hover:bg-slate-700",
        "flex items-center space-x-2",
        "cursor-pointer"
      )}
    >
      {!lastMessage ? (
        <ChatRowThatHasNoMessages
          chatId={chatId}
          user={user}
        />
      ) : (
        <ChatRowWithLastMessage
          chatId={chatId}
          lastMessage={lastMessage}
          user={user}
        />
      )}
    </div>
  )
}
