import { redirect } from "next/navigation"
import { ChatInput, ChatMessages } from "@/components"
import { ChatControls } from "@/components/chat/ChatControls"
import { getServerUser } from "@/services/auth"

interface ChatPageProps {
  params: {
    chatId: string
  }
}

export default async function ChatPage({ params: { chatId } }: ChatPageProps) {
  const user = await getServerUser()

  if (!user) {
    return null
  }

  return (
    <>
      <ChatControls
        chatId={chatId}
        userId={user.id}
      />
      <ChatMessages
        chatId={chatId}
        user={user}
        initialMessages={[]}
      />
      <ChatInput chatId={chatId} />
    </>
  )
}
