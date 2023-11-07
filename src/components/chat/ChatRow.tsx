"use client"

import { useLastMessageInChat } from "@hooks/useLastMessageInChat"
import { useLanguage, useSyncedUser } from "@stores"
import { useRouter } from "@hooks"
import { Skeleton } from "@ui"
import { cn, prettifyId } from "@utilities"
import { UserAvatar } from "../user/UserAvatar"
import type { Chat } from "@types"

interface ChatRowProps {
  chatId: Chat["id"]
}

export const ChatRow: React.FC<ChatRowProps> = ({ chatId }) => {
  const [messages, loading] = useLastMessageInChat(chatId)
  const user = useSyncedUser()
  const language = useLanguage()
  const router = useRouter()

  if (loading) {
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
  const message = messages?.[0]

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
        name={message?.user.name || user?.name}
        image={message?.user.image || user?.image}
      />
      <div className="flex-1">
        <p className="font-bold">
          {message
            ? (message.user.name ?? user?.name)?.split(" ")[0]
            : "New Chat"}
        </p>
        <p className="text-gray-400 line-clamp-1">
          {message?.translated?.[language] ?? "Get the conversation started..."}
        </p>
      </div>
      <div className="text-xs text-gray-400 text-right">
        <p className="mb-auto">
          {message?.timestamp.toDate().toLocaleTimeString() ??
            "No messages yet"}
        </p>
        <p className="">Chat #{prettifyId(chatId)}...</p>
      </div>
    </div>
  )
}
