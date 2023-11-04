"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { addChat } from "@/services/addChat"
import { useToast } from "../components/ui/toast/useToast"

export function useCreateChat() {
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()
  const { showToast } = useToast()
  const router = useRouter()

  async function createChat() {
    if (!session?.user) {
      return
    }
    setLoading(true)
    const { dismissToast, updateToast } = showToast({
      description: "Hold tight while we create your new chat...",
      title: "Creating new chat...",
      variant: "default",
    })
    try {
      const chatId = await addChat(session.user)
      updateToast({
        description: "Redirecting to the new chat, Please wait...",
        title: "Created new chat!",
        variant: "success",
      })
      router.push(`/chat/${chatId}`)
    } catch (error) {
      updateToast({
        description: JSON.stringify(error),
        title: "Something Went Wrong!",
        variant: "destructive",
      })
    } finally {
      dismissToast(2000)
      setLoading(false)
    }
  }

  return { createChat, loading }
}
