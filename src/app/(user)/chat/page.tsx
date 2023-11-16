import { ChatList } from "@/components"
import { getServerUser } from "@/services/auth"
import { getParticipatingChats } from "@/services/chat"

export default async function ChatsPage() {
  const user = await getServerUser()

  if (!user) {
    return null
  }

  const initialChats = await getParticipatingChats({ userId: user.id })

  return (
    <div>
      <ChatList
        initialChats={initialChats}
        user={user}
      />
    </div>
  )
}
