import { UserAvatar } from "@/components/user/UserAvatar"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { prettifyId } from "@/utilities/string"
import { getTranslation } from "@/utilities/translations"
import type { User } from "@/types/User"

export const ChatRowThatHasNoMessages: React.FC<{
  chatId: string
  user: User
}> = ({ chatId, user }) => {
  const language = usePreferredLanguage()
  return (
    <>
      <UserAvatar
        name={user.name}
        image={user.image}
      />
      <div className="flex-1">
        <p className="font-bold">{getTranslation("New Chat", language)}</p>
        <p className="text-gray-400 line-clamp-1">
          {getTranslation("Get the conversation started...", language)}
        </p>
      </div>
      <div className="text-xs text-gray-400 text-right">
        <p className="mb-auto">{getTranslation("No messages yet", language)}</p>
        <p className="">
          {getTranslation("Chat", language)} #{prettifyId(chatId)}...
        </p>
      </div>
    </>
  )
}
