import { showToast } from "@/components/ui"
import { createChat } from "@/services/chat"
import { sleep } from "@/utilities/sleep"
import { useRouter } from "./useBuiltins"
import { useProcess } from "./useProcess"

export function useCreateChat() {
  const router = useRouter()
  return useProcess(async (_, adminId: string) => {
    showToast({
      description: "Hold tight while we create your new chat...",
      title: "Creating new chat...",
      variant: "default",
    })
    try {
      await sleep(1750)
      const chatId = await createChat({ adminId })
      showToast({
        description: "Redirecting to the new chat, Please wait...",
        title: "Created new chat!",
        variant: "success",
      })
      await sleep(1750)
      router.push(`/chat/${chatId}`)
    } catch (error) {
      showToast({ error: error as Error })
    }
  })
}
