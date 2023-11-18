import { showToast } from "@/components/ui"
import { createChat, getParticipatingChatCount } from "@/services/chat"
import { sleep } from "@/utilities/sleep"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { useRouter } from "./useBuiltins"
import { useProcess } from "./useProcess"
import { useIsPro } from "./useIsPro"

export function useCreateChat() {
  const isPro = useIsPro()
  const router = useRouter()
  return useProcess(async (_, adminId: string) => {
    showToast({
      description: "Hold tight while we create your new chat...",
      duration: 2000,
      title: "Creating new chat...",
      variant: "default",
    })
    try {
      if (!isPro) {
        const participatingChatCount = await getParticipatingChatCount({
          userId: adminId,
        })
        if (participatingChatCount >= 3) {
          throw new FreePlanLimitExceededError("3 chats per user")
        }
      }
      const chatId = await createChat({ adminId })
      showToast({
        description: "Redirecting to the new chat, Please wait...",
        duration: 2000,
        title: "Created new chat!",
        variant: "success",
      })
      router.push(`/chat/${chatId}`)
    } catch (error) {
      showToast({ error: error as Error })
    }
  })
}
