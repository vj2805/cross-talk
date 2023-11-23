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
  const [user, userStatus, userError] = useRequiredUser()
  const [preferredLanguage, languageStatus, languageError] =
    usePreferredLanguage()
  const [createChat, processing] = useCreateChat()

  if (userStatus === "loading" || languageStatus === "loading") {
    return <Spinner />
  }

  if (userStatus === "error" || languageStatus === "error") {
    return <ErrorAlert error={[userError, languageError]} />
  }

  return large ? (
    <Button
      variant="default"
      disabled={processing}
      onClick={() => createChat(user.id)}
    >
      {processing ? (
        <Spinner />
      ) : (
        preferredLanguage.translate("Create a New Chat")
      )}
    </Button>
  ) : (
    <Button
      variant="ghost"
      size="icon"
      disabled={processing}
      onClick={() => createChat(user.id)}
    >
      {processing ? <Spinner /> : <MessageSquarePlusIcon />}
    </Button>
  )
}
