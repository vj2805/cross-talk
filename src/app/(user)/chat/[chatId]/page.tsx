import {
  ChatControls,
  ChatMessageForm,
  ChatMessages,
  SignInRequiredAlert,
} from "@/components"
import { ErrorAlert, NextLink } from "@/components/ui"
import { getServerUser } from "@/services/auth"
import { isUserParticipantOfChat } from "@/services/user"

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

  try {
    const hasAccess = await isUserParticipantOfChat(chatId, user.id)
    if (!hasAccess) {
      throw {
        action: (
          <NextLink
            prefetch={false}
            href="/chat"
          >
            Go Back
          </NextLink>
        ),
        message: `You do not have permission to access the chat with id ${chatId}`,
        name: "Permission Error!",
      }
    }
  } catch (error) {
    return <ErrorAlert error={error as Error} />
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
      <ChatMessageForm chatId={chatId} />
    </>
  )
}
