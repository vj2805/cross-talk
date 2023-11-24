"use client"

import { Button, ErrorAlert, Spinner } from "@/components/ui"
import { MessageSquarePlusIcon } from "@/components/ui/icons"
import { useCreateChat } from "@/hooks/useCreateChat"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { useRequiredUser } from "@/hooks/useRequiredUser"

interface CreateChatButtonProps {
  large?: true
}

export const CreateChatButton: React.FC<CreateChatButtonProps> = ({
  large,
}) => {
  const [user, isUserLoading, userError] = useRequiredUser()
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()
  const [createChat, isProcessing] = useCreateChat()

  if (isUserLoading || isLanguagesLoading) {
    return <Spinner />
  }

  if (userError || languageError) {
    return <ErrorAlert error={[userError, languageError]} />
  }

  return large ? (
    <Button
      variant="default"
      disabled={isProcessing}
      onClick={() => createChat(user.id)}
    >
      {isProcessing ? (
        <Spinner />
      ) : (
        preferredLanguage.translate("Create a New Chat")
      )}
    </Button>
  ) : (
    <Button
      variant="ghost"
      size="icon"
      disabled={isProcessing}
      onClick={() => createChat(user.id)}
    >
      {isProcessing ? <Spinner /> : <MessageSquarePlusIcon />}
    </Button>
  )
}
