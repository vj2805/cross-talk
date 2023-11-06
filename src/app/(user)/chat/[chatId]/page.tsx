import { ChatInput, ChatMessages } from "@components"
import { getMessages, getServerUser } from "@services"

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

  const initialMessages = await getMessages(chatId)

  return (
    <>
      <div className="flex-1">
        <ChatMessages
          chatId={chatId}
          user={user}
          initialMessages={initialMessages}
        />
      </div>
      <ChatInput chatId={chatId} />
    </>
  )
}
