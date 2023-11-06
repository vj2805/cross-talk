import { getParticipatingChats, getServerUser } from "@services"
import { ChatListRow } from "./ChatListRow"

export const ChatList: React.FC = async () => {
  const user = await getServerUser()

  if (!user) {
    return null
  }

  const initialChats = await getParticipatingChats(user.id)

  return <ChatListRow initialChats={initialChats} />
}
