"use client"

import { Button, Spinner } from "@/components/ui"
import { MessageSquarePlusIcon } from "@/components/ui/icons"
import { useCreateChat } from "@/hooks/useCreateChat"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import { useTranslate } from "@/hooks/useTranslate"

interface CreateChatButtonProps {
  large?: true
}

export const CreateChatButton: React.FC<CreateChatButtonProps> = ({
  large,
}) => {
  const [user] = useRequiredUser()
  const [createChat, processing] = useCreateChat()
  const translate = useTranslate()

  if (!user) {
    return null
  }

  return large ? (
    <Button
      variant="default"
      disabled={processing}
      onClick={() => createChat(user.id)}
    >
      {processing ? <Spinner /> : translate("Create a New Chat")}
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
