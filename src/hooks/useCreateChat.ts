import { dismissToast, showToast, updateToast } from "@/components/ui"
import { createChat } from "@/services/chat"
import { useRouter } from "./useBuiltins"
import { useProcess } from "./useProcess"
import { useSyncedUser } from "./useSyncedUser"

export function useCreateChat() {
  const { processing, startProcess, stopProcess } = useProcess()
  const user = useSyncedUser()
  const router = useRouter()

  async function createNewChat() {
    if (!user) {
      return
    }
    startProcess()
    const toastId = showToast({
      description: "Hold tight while we create your new chat...",
      title: "Creating new chat...",
      variant: "default",
    })
    try {
      const chatId = await createChat(user.id)
      updateToast(toastId, {
        description: "Redirecting to the new chat, Please wait...",
        title: "Created new chat!",
        variant: "success",
      })
      router.push(`/chat/${chatId}`)
    } catch (error) {
      updateToast(toastId, {
        description: JSON.stringify(error),
        title: "Something Went Wrong!",
        variant: "destructive",
      })
    } finally {
      dismissToast(toastId, 2000)
      stopProcess()
    }
  }

  return { createNewChat, processing }
}
