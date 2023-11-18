import { UserAvatar } from "@/components/user/UserAvatar"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { useTranslate } from "@/hooks/useTranslate"
import { getLanguageCode } from "@/utilities/languages"
import { prettifyId } from "@/utilities/string"
import { getTimestampString } from "@/utilities/timestamps"
import type { User } from "@/types/User"
import type { Message } from "@/types/Message"

export const ChatRowWithLastMessage: React.FC<{
  chatId: string
  lastMessage: Nullish<Message>
  user: User
}> = ({ chatId, lastMessage, user }) => {
  const language = usePreferredLanguage()
  const translate = useTranslate()
  return (
    <>
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
            ? lastMessage.translated?.[getLanguageCode(language)] ??
              lastMessage.input
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
    </>
  )
}
