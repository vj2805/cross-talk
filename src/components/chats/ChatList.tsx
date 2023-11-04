import { getParticipatingChats } from "@/services/getParticipatingChats"
import { getServerUser } from "@/services/getServerUser"
import { ChatListRow } from "./ChatListRow"

export const ChatList: React.FC = async () => {
  const user = await getServerUser()

  if (!user) {
    return null
  }

  const initialChats = await getParticipatingChats(user.uid)

  return <ChatListRow initialChats={initialChats} />
}
