import { redirect } from "next/navigation"
import { ChatInput, ChatMessages } from "@/components"
import { ChatControls } from "@/components/chat/ChatControls"
import { getServerUser } from "@/services/auth"
import { getMessages } from "@/services/message"

interface ChatPageProps {
  params: {
    chatId: string
  }
}

export default async function ChatPage({ params: { chatId } }: ChatPageProps) {
  const user = await getServerUser()

  if (!user) {
    return redirect("/")
  }

  let initialMessages = await getMessages({ chatId })

  return (
    <>
      <ChatControls chatId={chatId} />
      <ChatMessages
        chatId={chatId}
        user={user}
        initialMessages={initialMessages}
      />
      <ChatInput chatId={chatId} />
    </>
  )
}
