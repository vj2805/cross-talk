import {
  ChatControls,
  ChatInput,
  ChatMessages,
  SignInRequiredAlert,
} from "@/components"
import { getServerUser } from "@/services/auth"

interface ChatPageProps {
  params: {
    chatId: string
  }
}

export default async function ChatPage({ params: { chatId } }: ChatPageProps) {
  const user = await getServerUser()

  if (!user) {
    return <SignInRequiredAlert />
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
      />
      <ChatInput chatId={chatId} />
    </>
  )
}
