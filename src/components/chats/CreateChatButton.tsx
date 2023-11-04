"use client"

import { MessageSquarePlusIcon } from "lucide-react"
import { cn } from "@/services/shadcn"
import { Button } from "../ui/button/Button"
import { useCreateChat } from "../../hooks/useCreateChat"

export const CreateChatButton: React.FC = () => {
  const { createChat } = useCreateChat()
  return (
    <Button
      variant="ghost"
      onClick={createChat}
      className={cn("aspect-square", "p-0")}
    >
      <MessageSquarePlusIcon />
    </Button>
  )
}
