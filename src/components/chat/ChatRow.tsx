"use client"

import { useRouter } from "@/hooks/useBuiltins"
import { useLastMessage } from "@/hooks/useLastMessage"
import { useUser } from "@/hooks/useUser"
import { cn } from "@/utilities/string"
import { showErrorToast } from "../ui"
import { ChatRowSkeleton } from "./ChatRowSkeleton"
import { ChatRowThatHasNoMessages } from "./ChatRowThatHasNoMessages"
import { ChatRowWithLastMessage } from "./ChatRowWithLastMessage"
import type { Chat } from "@/types/Chat"

interface ChatRowProps {
  chatId: Chat["id"]
}

export const ChatRow: React.FC<ChatRowProps> = ({ chatId }) => {
  const lastMessage = useLastMessage(chatId)
  const user = useUser()
  const router = useRouter()

  if (!user) {
    return null
  }

  if (lastMessage.status === "loading") {
    return <ChatRowSkeleton />
  }

  if (lastMessage.status === "error") {
    return void showErrorToast(lastMessage.error)
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
      {!lastMessage.data ? (
        <ChatRowThatHasNoMessages
          chatId={chatId}
          user={user}
        />
      ) : (
        <ChatRowWithLastMessage
          chatId={chatId}
          lastMessage={lastMessage.data}
          user={user}
        />
      )}
    </div>
  )
}
