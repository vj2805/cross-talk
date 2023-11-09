import { getServerUser } from "@services/auth"
import { getParticipatingChats } from "@services/chat"
import { ChatListRows } from "./ChatListRows"

export const ChatList: React.FC = async () => {
  const user = await getServerUser()

  if (!user) {
    return null
  }

  const initialChats = await getParticipatingChats(user.id)

  return <ChatListRows initialChats={initialChats} />
}
