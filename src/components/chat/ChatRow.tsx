"use client"

import { ChatRowSkeleton } from "@/components/chat/ChatRowSkeleton"
import { ErrorAlert } from "@/components/ui"
import { UserAvatar } from "@/components/user/UserAvatar"
import { useRouter } from "@/hooks/useBuiltins"
import { useLastMessage } from "@/hooks/useLastMessage"
import { usePreferredLanguageCode } from "@/hooks/usePreferredLanguageCode"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import { useTranslate } from "@/hooks/useTranslate"
import type { Chat } from "@/types/Chat"
import { cn, prettifyId } from "@/utilities/string"
import { getTimestampString } from "@/utilities/timestamps"

interface ChatRowProps {
  chatId: Chat["id"]
}

export const ChatRow: React.FC<ChatRowProps> = ({ chatId }) => {
  const [lastMessage, status, error] = useLastMessage(chatId)
  const [user] = useRequiredUser()
  const router = useRouter()
  const languageCode = usePreferredLanguageCode()
  const translate = useTranslate()

  if (!user) {
    return null
  }

  if (status === "loading") {
    return <ChatRowSkeleton />
  }

  if (status === "error") {
    return <ErrorAlert error={error} />
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
            : translate("New Chat")}
        </p>
        <p className="text-gray-400 line-clamp-1">
          {lastMessage
            ? lastMessage.translated?.[languageCode] ?? lastMessage.input
            : translate("Get the conversation started...")}
        </p>
      </div>
      <div className="text-xs text-gray-400 text-right">
        <p className="mb-auto">
          {lastMessage
            ? getTimestampString(lastMessage.timestamp)
            : translate("No messages yet")}
        </p>
        <p className="font-thin">
          {translate("Chat")} #{prettifyId(chatId)}...
        </p>
      </div>
    </div>
  )
}
