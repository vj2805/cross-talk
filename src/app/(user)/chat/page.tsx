import { ChatList, SignInRequiredAlert } from "@/components"
import { getServerUser } from "@/services/auth"

export default async function ChatsPage() {
  const user = await getServerUser()

  if (!user) {
    return <SignInRequiredAlert />
  }

  return (
    <div className="flex-1">
      <ChatList user={user} />
    </div>
  )
}
