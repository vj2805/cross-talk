"use client"

import { useRouter } from "next/navigation"
import { ChatRowSkeleton } from "@/components/chat/ChatRowSkeleton"
import { ErrorAlert } from "@/components/ui"
import { UserAvatar } from "@/components/user/UserAvatar"
import { useLastMessage } from "@/hooks/useLastMessage"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import type { Chat } from "@/types/Chat"
import { cn } from "@/utilities/string"
import { getTimestampString } from "@/utilities/timestamps"

interface ChatRowProps {
  chatId: Chat["id"]
}

export const ChatRow: React.FC<ChatRowProps> = ({ chatId }) => {
  const [user, userStatus, userError] = useRequiredUser()
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()
  const [lastMessage, isLastMessageLoading, lastMessageError] =
    useLastMessage(chatId)
  const router = useRouter()

  if (userStatus === "loading" || isLanguagesLoading || isLastMessageLoading) {
    return <ChatRowSkeleton />
  }

  if (userStatus === "error" || languageError || lastMessageError) {
    return <ErrorAlert error={[userError, languageError, lastMessageError]} />
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
      <UserAvatar
        name={lastMessage?.user.name ?? user.name}
        image={lastMessage?.user.image ?? user.image}
      />
      <div className="flex-1">
        <p className="font-bold">
          {lastMessage
            ? (lastMessage.user.name ?? user.name)?.split(" ")[0]
            : preferredLanguage.translate("New Chat")}
        </p>
        <p className="text-gray-400 line-clamp-1">
          {lastMessage
            ? lastMessage.translated?.[preferredLanguage.code] ??
              lastMessage.input
            : preferredLanguage.translate("Get the conversation started...")}
        </p>
      </div>
      <div className="text-xs text-gray-400 text-right">
        <p className="mb-auto">
          {lastMessage
            ? getTimestampString(lastMessage.timestamp)
            : preferredLanguage.translate("No messages yet")}
        </p>
        <p className="font-thin">
          {preferredLanguage.translate("Chat")} #{chatId.substring(0, 4)}...
        </p>
      </div>
    </div>
  )
}
