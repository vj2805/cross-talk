import { getParticipatingChats } from "@/services/getParticipatingChats"
import { getSession } from "@/services/getSession"
import { ChatListRow } from "./ChatListRow"

export const ChatList: React.FC = async () => {
  const session = await getSession()

  if (!session?.user) {
    return null
  }

  const initialChats = await getParticipatingChats(session.user.id)

  return <ChatListRow initialChats={initialChats} />
}
