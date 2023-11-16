"use client"

import { UserError } from "@/errors/UserError"
import { useRouter } from "@/hooks/useBuiltins"
import { useLastMessage } from "@/hooks/useLastMessage"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { useUser } from "@/hooks/useUser"
import { cn } from "@/utilities/string"
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
  const language = usePreferredLanguage()
  const router = useRouter()

  if (!user) {
    throw new UserError("User is NOT signed in!")
  }

  if (lastMessage.status === "loading") {
    return <ChatRowSkeleton />
  }

  if (lastMessage.status === "error") {
    throw lastMessage.error
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
          language={language}
          user={user}
        />
      ) : (
        <ChatRowWithLastMessage
          chatId={chatId}
          lastMessage={lastMessage.data}
          language={language}
          user={user}
        />
      )}
    </div>
  )
}
