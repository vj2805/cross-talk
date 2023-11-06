import { getServerSession } from "next-auth"
import { authOptions } from "@auth"
import { getParticipatingChats } from "@services"
import { ChatListRow } from "./ChatListRow"

export const ChatList: React.FC = async () => {
  const user = await getServerUser()

  console.log(user)

  if (!user?.id) {
    return null
  }

  const initialChats = await getParticipatingChats(user.id)

  return <ChatListRow initialChats={initialChats} />
}

async function getServerUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}
