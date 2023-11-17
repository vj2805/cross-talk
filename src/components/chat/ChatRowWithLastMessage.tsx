import { UserAvatar } from "@/components/user/UserAvatar"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { getLanguageCode } from "@/utilities/languages"
import { prettifyId } from "@/utilities/string"
import { getTimestampString } from "@/utilities/timestamps"
import type { Message } from "@/types/Message"
import type { User } from "@/types/User"

export const ChatRowWithLastMessage: React.FC<{
  chatId: string
  lastMessage: Message
  user: User
}> = ({ chatId, lastMessage, user }) => {
  const language = usePreferredLanguage()
  return (
    <>
      <UserAvatar
        name={lastMessage.user.name || user?.name}
        image={lastMessage.user.image || user?.image}
      />
      <div className="flex-1">
        <p className="font-bold">
          {(lastMessage.user.name ?? user?.name)?.split(" ")[0]}
        </p>
        <p className="text-gray-400 line-clamp-1">
          {lastMessage.translated?.[getLanguageCode(language)] ??
            lastMessage.input}
        </p>
      </div>
      <div className="text-xs text-gray-400 text-right">
        <p className="mb-auto">{getTimestampString(lastMessage.timestamp)}</p>
        <p className="">Chat #{prettifyId(chatId)}...</p>
      </div>
    </>
  )
}
