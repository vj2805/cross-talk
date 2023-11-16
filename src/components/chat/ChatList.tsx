import { UserError } from "@/errors/UserError"
import { getServerUser } from "@/services/auth"
import { getParticipatingChats } from "@/services/chat"
import { ChatListRows } from "./ChatListRows"

export const ChatList: React.FC = async () => {
  const user = await getServerUser()

  if (!user) {
    throw new UserError("User is NOT signed in!")
  }

  const initialChats = await getParticipatingChats({ userId: user.id })

  return <ChatListRows initialChats={initialChats} />
}
