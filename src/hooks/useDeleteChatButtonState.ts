import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { deleteChat } from "@/actions/deleteChat"
import { showToast } from "@/components/ui"
import type { Chat } from "@/types/Chat"
import { usePreferredLanguage } from "./usePreferredLanguage"
import { useRequiredUser } from "./useRequiredUser"

export function useDeleteChatButtonState(chat: Chat) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)
  const [user, isUserLoading, userError] = useRequiredUser()
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()

  const executeDelete = useCallback(async () => {
    if (isDeleting || isUserLoading || userError) {
      return
    }
    if (user.id !== chat.adminId) {
      return
    }
    showToast({
      description: "Please wait while we delete the chat...",
      title: "Deleting chat",
    })
    setIsDeleting(true)
    try {
      await deleteChat(chat.id)
      showToast({
        description: `${"Deleted Chat with id"} ${chat.id}`,
        variant: "success",
      })
      router.replace("/chat")
    } catch (error) {
      showToast({ error: error as Error })
    } finally {
      setIsDeleting(false)
    }
  }, [chat, user, router, isDeleting, isUserLoading, userError])

  return {
    executeDelete,
    isDeleting,
    isLanguagesLoading,
    isUserLoading,
    languageError,
    preferredLanguage,
    userError,
  }
}
