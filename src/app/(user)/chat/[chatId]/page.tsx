import { ChatInput, ChatMessages, ChatParticipantsBadges } from "@components"
import { getMessages } from "@services/message"
import { getServerUser } from "@utilities"

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

  let initialMessages = await getMessages(chatId)

  return (
    <>
      <ChatParticipantsBadges chatId={chatId} />
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
