import { useState } from "react"
import { useRouter } from "next/navigation"
import { showToast } from "@/components/ui"
import { chatsQuota } from "@/configs/quota"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { createChat, getParticipatingChatCount } from "@/services/chat"
import { useIsPro } from "./useIsPro"

export function useCreateChat() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPro, isSubscriptionLoading, subscriptionError] = useIsPro()
  const router = useRouter()

  async function execute(adminId: string) {
    if (isSubscriptionLoading || subscriptionError) {
      return
    }
    if (isProcessing) {
      return
    }
    setIsProcessing(true)
    showToast({
      description: "Hold tight while we create your new chat...",
      title: "Creating new chat...",
    })
    try {
      if (!isPro) {
        const participatingChatCount = await getParticipatingChatCount(adminId)
        if (participatingChatCount >= chatsQuota) {
          throw new FreePlanLimitExceededError(`${chatsQuota} chats per user`)
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
      setIsProcessing(false)
    }
  }

  return [execute, isProcessing] as const
}
