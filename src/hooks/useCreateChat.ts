import { showToast } from "@/components/ui"
import { createChat } from "@/services/chat"
import { useRouter } from "./useBuiltins"
import { useProcess } from "./useProcess"

export function useCreateChat() {
  const router = useRouter()
  return useProcess(async (_, adminId: string) => {
    const [dismissToast, updateToast] = showToast({
      description: "Hold tight while we create your new chat...",
      title: "Creating new chat...",
      variant: "default",
    })
    try {
      const chatId = await createChat({ adminId })
      updateToast({
        description: "Redirecting to the new chat, Please wait...",
        title: "Created new chat!",
        variant: "success",
      })
      router.push(`/chat/${chatId}`)
    } catch (error) {
      updateToast({ error: error as Error })
    } finally {
      dismissToast(2000)
    }
  })
}
