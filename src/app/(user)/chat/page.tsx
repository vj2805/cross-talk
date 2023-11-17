import { redirect } from "next/navigation"
import { ChatList } from "@/components"
import { getServerUser } from "@/services/auth"

export default async function ChatsPage() {
  const user = await getServerUser()

  if (!user) {
    return redirect("/")
  }

  return (
    <div>
      <ChatList user={user} />
    </div>
  )
}
