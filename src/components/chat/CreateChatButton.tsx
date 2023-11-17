"use client"

import { Button, Spinner } from "@/components/ui"
import { MessageSquarePlusIcon } from "@/components/ui/icons"
import { useCreateChat } from "@/hooks/useCreateChat"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import { getTranslation } from "@/utilities/translations"

interface CreateChatButtonProps {
  large?: true
}

export const CreateChatButton: React.FC<CreateChatButtonProps> = ({
  large,
}) => {
  const language = usePreferredLanguage()
  const [user] = useRequiredUser()
  const [createChat, processing] = useCreateChat()

  if (!user) {
    return null
  }

  return large ? (
    <Button
      variant="default"
      disabled={processing}
      onClick={() => createChat(user.id)}
    >
      {processing ? <Spinner /> : getTranslation("Create a New Chat", language)}
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
