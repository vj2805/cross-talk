import { ChatList, SignInRequiredAlert } from "@/components"
import { getServerUser } from "@/services/auth"

export default async function ChatsPage() {
  const user = await getServerUser()

  if (!user) {
    return <SignInRequiredAlert />
  }

  return (
    <div>
      <ChatList user={user} />
    </div>
  )
}
