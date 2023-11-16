"use client"

import { Button, Spinner } from "@/components/ui"
import { MessageSquarePlusIcon } from "@/components/ui/icons"
import { useCreateChat } from "@/hooks/useCreateChat"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { getTranslation } from "@/utilities/translations"

interface CreateChatButtonProps {
  large?: true
}

export const CreateChatButton: React.FC<CreateChatButtonProps> = ({
  large,
}) => {
  const { createNewChat, processing } = useCreateChat()
  const language = usePreferredLanguage()
  return large ? (
    <Button
      variant="default"
      disabled={processing}
      onClick={createNewChat}
    >
      {processing ? <Spinner /> : getTranslation("Create a New Chat", language)}
    </Button>
  ) : (
    <Button
      variant="ghost"
      size="icon"
      disabled={processing}
      onClick={createNewChat}
    >
      {processing ? <Spinner /> : <MessageSquarePlusIcon />}
    </Button>
  )
}
