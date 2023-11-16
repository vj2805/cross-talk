import { UserAvatar } from "@/components/user/UserAvatar"
import { prettifyId } from "@/utilities/string"
import type { Language } from "@/types/Language"
import type { User } from "@/types/User"

export const ChatRowThatHasNoMessages: React.FC<{
  chatId: string
  language: Language
  user: User
}> = ({ chatId, language, user }) => (
  <>
    <UserAvatar
      name={user.name}
      image={user.image}
    />
    <div className="flex-1">
      <p className="font-bold">New Chat</p>
      <p className="text-gray-400 line-clamp-1">
        Get the conversation started...
      </p>
    </div>
    <div className="text-xs text-gray-400 text-right">
      <p className="mb-auto">No messages yet</p>
      <p className="">Chat #{prettifyId(chatId)}...</p>
    </div>
  </>
)
