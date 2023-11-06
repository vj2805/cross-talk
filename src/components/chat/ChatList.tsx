import { getParticipatingChats, getServerUser } from "@services"
import { ChatListRows } from "./ChatListRows"

export const ChatList: React.FC = async () => {
  const user = await getServerUser()

  if (!user) {
    return null
  }

  const initialChats = await getParticipatingChats(user.id)

  console.log(initialChats)
  return <ChatListRows initialChats={initialChats} />
}
