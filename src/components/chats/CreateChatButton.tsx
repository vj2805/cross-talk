"use client"

import { MessageSquarePlusIcon } from "lucide-react"
import { cn } from "@/services/shadcn"
import { Button } from "../ui/button/Button"
import { useCreateChat } from "../../hooks/useCreateChat"
import { Spinner } from "../ui/spinner/Spinner"

interface CreateChatButtonProps {
  large?: true
}

export const CreateChatButton: React.FC<CreateChatButtonProps> = ({
  large,
}) => {
  const { createChat, loading } = useCreateChat()
  return large ? (
    <Button
      variant="default"
      onClick={createChat}
    >
      {loading ? <Spinner /> : "Create a New Chat"}
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
