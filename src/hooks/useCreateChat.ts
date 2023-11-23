import { useState } from "react"
import { useRouter } from "next/navigation"
import { showToast } from "@/components/ui"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { createChat, getParticipatingChatCount } from "@/services/chat"
import { useIsPro } from "./useIsPro"

export function useCreateChat() {
  const [isPro, status] = useIsPro()
  const router = useRouter()
  const [running, setRunning] = useState(false)
  return [
    async (adminId: string) => {
      if (status !== "ready") {
        return
      }
      if (running) {
        return
      }
      showToast({
        description: "Hold tight while we create your new chat...",
        title: "Creating new chat...",
      })
      try {
        setRunning(true)
        if (!isPro) {
          const participatingChatCount =
            await getParticipatingChatCount(adminId)
          if (participatingChatCount >= 3) {
            throw new FreePlanLimitExceededError("3 chats per user")
          }
        }
        const chatId = await createChat(adminId)
        showToast({
          description: "Redirecting to the new chat, Please wait...",
          title: "Created new chat!",
          variant: "success",
        })
        router.push(`/chat/${chatId}`)
      } catch (error) {
        showToast({ error: error as Error })
      } finally {
        setRunning(false)
      }
    },
    running,
  ]
}
