"use client"

import { MessageSquarePlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button/Button"

export const CreateChatButton: React.FC = () => {
  const router = useRouter()

  const createChat = async () => {
    router.push(`/chat/${"abc"}`)
  }

  return (
    <Button
      variant="ghost"
      className="aspect-square p-0"
      onClick={createChat}
    >
      <MessageSquarePlusIcon />
    </Button>
  )
}
