"use client"

import { useRouter, useUser } from "@hooks"
import { addChat } from "@services"
import { showToast } from "@ui"
import { useProcess } from "./useProcess"

export function useCreateChat() {
  const { processing, startProcess, stopProcess } = useProcess()
  const [user] = useUser()
  const router = useRouter()

  async function createChat() {
    if (!user) {
      return
    }
    startProcess()
    const { dismissToast, updateToast } = showToast({
      description: "Hold tight while we create your new chat...",
      title: "Creating new chat...",
      variant: "default",
    })
    try {
      const chatId = await addChat(user.uid)
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
      stopProcess()
    }
  }

  return { createChat, processing }
}
