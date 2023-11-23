"use client"

import { useRouter } from "next/navigation"
import { deleteChat } from "@/actions/deleteChat"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import { useTranslate } from "@/hooks/useTranslate"
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  const [user] = useRequiredUser()
  const router = useRouter()
  const translate = useTranslate()

  if (!user) {
    return null
  }

  if (user.id !== adminId) {
    return null
  }

  async function handleDeleteChat() {
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
        <Button variant="destructive">{translate("Delete Chat")}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{translate("Are you sure?")}</DialogTitle>
          <DialogDescription>
            {translate("This will delete the chat for all users.")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 space-x-2">
          <Button
            variant="destructive"
            onClick={handleDeleteChat}
          >
            {translate("Delete")}
          </Button>
          <DialogClose asChild>
            <Button variant="outline">{translate("Cancel")}</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
