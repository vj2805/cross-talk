import { getServerUser } from "@services"

export default async function ChatPage() {
  const user = await getServerUser()
  return <div>Chat</div>
}
