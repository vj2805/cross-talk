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
      disabled={processing}
      onClick={createChat}
      className={cn("aspect-square", "p-0")}
    >
      {processing ? <Spinner /> : <MessageSquarePlusIcon />}
    </Button>
  )
}