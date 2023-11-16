import { ChatList } from "@/components"
import { UserError } from "@/errors/UserError"
import { getServerUser } from "@/services/auth"
import { getParticipatingChats } from "@/services/chat"

export default async function ChatsPage() {
  const user = await getServerUser()

  if (!user) {
    throw new UserError("User is NOT signed in!")
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
