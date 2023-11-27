"use client"

import { useDeleteChatButtonState } from "@/hooks/useDeleteChatButtonState"
import type { Chat } from "@/types/Chat"
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
  Skeleton,
} from "../ui"

interface ChatDeleteButtonProps {
  chat: Chat
}

export function ChatDeleteButton({ chat }: ChatDeleteButtonProps) {
  const {
    executeDelete,
    isDeleting,
    isLanguagesLoading,
    isUserLoading,
    languageError,
    userError,
    preferredLanguage,
  } = useDeleteChatButtonState(chat)

  if (isUserLoading || isLanguagesLoading) {
    return <Skeleton className="h-10 w-28" />
  }

  if (userError || languageError) {
    return <ErrorAlert error={[userError, languageError]} />
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          disabled={isDeleting}
        >
          {preferredLanguage?.translate("Delete Chat")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {preferredLanguage?.translate("Are you sure?")}
          </DialogTitle>
          <DialogDescription>
            {preferredLanguage?.translate(
              "This will delete the chat for all users."
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 space-x-2">
          <Button
            variant="destructive"
            disabled={isDeleting}
            onClick={executeDelete}
          >
            {preferredLanguage?.translate("Delete")}
          </Button>
          <DialogClose asChild>
            <Button variant="outline">
              {preferredLanguage?.translate("Cancel")}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
