"use client"

import { MessageSquarePlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button/Button"

export function CreateChatButton() {
  const router = useRouter()

  async function createChat() {
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
