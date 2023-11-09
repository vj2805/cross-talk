"use client"

import { useCreateChat } from "@hooks"
import { Button, Spinner } from "@components/ui"
import { MessageSquarePlusIcon } from "@components/ui/icons"

interface CreateChatButtonProps {
  large?: true
}

export const CreateChatButton: React.FC<CreateChatButtonProps> = ({
  large,
}) => {
  const { createNewChat, processing } = useCreateChat()
  return large ? (
    <Button
      variant="default"
      disabled={processing}
      onClick={createNewChat}
    >
      {processing ? <Spinner /> : "Create a New Chat"}
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
