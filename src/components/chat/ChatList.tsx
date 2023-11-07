import { getServerUser } from "@services"
import { chatService } from "@services/chat"
import { ChatListRows } from "./ChatListRows"

export const ChatList: React.FC = async () => {
  const user = await getServerUser()

  if (!user) {
    return null
  }

  const initialChats = await chatService.getParticipatingChats(user.id)

  return <ChatListRows initialChats={initialChats} />
}
