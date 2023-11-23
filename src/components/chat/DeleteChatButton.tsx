"use client"

import { useRouter } from "next/navigation"
import { deleteChat } from "@/actions/deleteChat"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  ErrorAlert,
  Spinner,
  showToast,
} from "../ui"

interface DeleteChatButtonProps {
  adminId: string
  chatId: string
}

export const DeleteChatButton: React.FC<DeleteChatButtonProps> = ({
  adminId,
  chatId,
}) => {
  const [user, userStatus, userError] = useRequiredUser()
  const [preferredLanguage, languageStatus, languageError] =
    usePreferredLanguage()
  const router = useRouter()

  if (userStatus === "loading" || languageStatus === "loading") {
    return <Spinner />
  }

  if (userStatus === "error" || languageStatus === "error") {
    return <ErrorAlert error={[userError, languageError]} />
  }

  async function handleDeleteChat() {
    if (userStatus !== "authenticated") {
      return
    }
    if (user.id !== adminId) {
      return
    }
    showToast({
      description: "Please wait while we delete the chat...",
      title: "Deleting chat",
    })
    try {
      await deleteChat(chatId)
      showToast({
        description: `${"Deleted Chat with id"} ${chatId}`,
        variant: "success",
      })
      router.replace("/chat")
    } catch (error) {
      showToast({ error: error as Error })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          {preferredLanguage.translate("Delete Chat")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {preferredLanguage.translate("Are you sure?")}
          </DialogTitle>
          <DialogDescription>
            {preferredLanguage.translate(
              "This will delete the chat for all users."
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 space-x-2">
          <Button
            variant="destructive"
            onClick={handleDeleteChat}
          >
            {preferredLanguage.translate("Delete")}
          </Button>
          <DialogClose asChild>
            <Button variant="outline">
              {preferredLanguage.translate("Cancel")}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
