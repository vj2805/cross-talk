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
  const { createChat, processing } = useCreateChat()
  return processing ? (
    <Button
      disabled
      variant="ghost"
      className={cn("aspect-square", "p-0")}
    >
      <Spinner />
    </Button>
  ) : large ? (
    <Button
      variant="default"
      onClick={createChat}
    >
      Create a New Chat
    </Button>
  ) : (
    <Button
      variant="ghost"
      onClick={createChat}
      className={cn("aspect-square", "p-0")}
    >
      <MessageSquarePlusIcon />
    </Button>
  )
}
