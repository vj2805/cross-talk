"use client"

import { Skeleton } from "@/components/ui"
import { UserAvatar } from "@/components/user/UserAvatar"
import { getLanguageCode } from "@/constants/languages"
import { useRouter } from "@/hooks/useBuiltins"
import { useLastMessage } from "@/hooks/useLastMessage"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { useUser } from "@/hooks/useUser"
import { cn, prettifyId } from "@/utilities/string"
import type { Chat } from "@/types/Chat"

interface ChatRowProps {
  chatId: Chat["id"]
}

export const ChatRow: React.FC<ChatRowProps> = ({ chatId }) => {
  const lastMessage = useLastMessage(chatId)
  const user = useUser()
  const language = usePreferredLanguage()
  const router = useRouter()

  if (lastMessage.status === "loading") {
    return (
      <div className={cn("p-5", "flex items-center space-x-2")}>
        <Skeleton className={cn("h-12 w-12", "rounded-full")} />
        <div className={cn("flex-1", "space-y-2")}>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
    )
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
      <UserAvatar
        name={lastMessage.data?.user.name || user?.name}
        image={lastMessage.data?.user.image || user?.image}
      />
      <div className="flex-1">
        <p className="font-bold">
          {lastMessage
            ? (lastMessage.data?.user.name ?? user?.name)?.split(" ")[0]
            : "New Chat"}
        </p>
        <p className="text-gray-400 line-clamp-1">
          {lastMessage.data?.translated?.[getLanguageCode(language)] ??
            "Get the conversation started..."}
        </p>
      </div>
      <div className="text-xs text-gray-400 text-right">
        <p className="mb-auto">
          {lastMessage.data?.localeTimeString ?? "No messages yet"}
        </p>
        <p className="">Chat #{prettifyId(chatId)}...</p>
      </div>
    </div>
  )
}
