import { useCallback, useMemo } from "react"
import { showToast } from "@/components/ui"
import { env } from "@/configs/env"

export function useLinkToChat(chatId: string) {
  const linkToChat = useMemo(() => {
    const protocol = env["NODE_ENV"] === "development" ? "http" : "https"
    const host = location.host
    return `${protocol}://${host}/chat/${chatId}`
  }, [chatId])

  const copyToClipboard = useCallback(async () => {
    try {
      await window.navigator.clipboard.writeText(linkToChat)
      showToast({
        description:
          "Share this to the person you want to chat with! (NOTE: They must be added to the chat to access it!)",
        title: "Copied Successfully!",
        variant: "success",
      })
    } catch (error) {
      showToast({ error: error as Error })
    }
  }, [linkToChat])

  return [linkToChat, copyToClipboard] as const
}
