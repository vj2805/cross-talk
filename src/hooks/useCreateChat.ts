import { useState } from "react"
import { useRouter } from "next/navigation"
import { showToast } from "@/components/ui"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { createChat, getParticipatingChatCount } from "@/services/chat"
import { useIsPro } from "./useIsPro"

export function useCreateChat() {
  const [running, setRunning] = useState(false)
  const [isPro, isSubscriptionLoading, subscriptionError] = useIsPro()
  const router = useRouter()

  async function run(adminId: string) {
    if (isSubscriptionLoading || subscriptionError) {
      return
    }
    if (running) {
      return
    }
    setRunning(true)
    showToast({
      description: "Hold tight while we create your new chat...",
      title: "Creating new chat...",
    })
    try {
      if (!isPro) {
        const participatingChatCount = await getParticipatingChatCount(adminId)
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
  }

  return [run, running] as const
}
