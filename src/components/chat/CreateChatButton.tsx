"use client"

import { useCreateChat } from "@hooks"
import { cn } from "@utilities"
import { Button, Spinner } from "@ui"
import { MessageSquarePlusIcon } from "@icons"

interface CreateChatButtonProps {
  large?: true
}

export const CreateChatButton: React.FC<CreateChatButtonProps> = ({
  large,
}) => {
  const { createNewChat: createChat, processing } = useCreateChat()
  return large ? (
    <Button
      variant="default"
      disabled={processing}
      onClick={createChat}
    >
      {processing ? <Spinner /> : "Create a New Chat"}
    </Button>
  ) : (
    <Button
      variant="ghost"
      size="icon"
      disabled={processing}
      onClick={createChat}
    >
      {processing ? <Spinner /> : <MessageSquarePlusIcon />}
    </Button>
  )
}
