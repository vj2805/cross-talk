"use client"

import { MessageSquarePlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/services/shadcn"
import { Button } from "../ui/button/Button"

export const CreateChatButton: React.FC = () => {
  const router = useRouter()

  const createChat = async () => {
    router.push(`/chat/${"abc"}`)
  }

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
