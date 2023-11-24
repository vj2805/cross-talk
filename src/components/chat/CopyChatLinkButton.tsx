"use client"

import { useId } from "react"
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  showToast,
} from "../ui"
import { CopyIcon } from "../ui/icons"

interface CopyChatLinkButtonProps {
  chatId: string
}

export function CopyChatLinkButton({ chatId }: CopyChatLinkButtonProps) {
  const id = useId()
  const linkToChat = createChatLink(chatId)

  async function copyLinkToClipboard() {
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
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <CopyIcon className="mr-2" />
          <span>Share Link</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Link</DialogTitle>
          <DialogDescription>
            Any user who has been{" "}
            <span className="text-indigo-600 font-bold">granted access</span>{" "}
            can use this link
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label
              htmlFor={id}
              className="sr-only"
            >
              Link
            </Label>
            <Input
              readOnly
              id={id}
              defaultValue={linkToChat}
            />
          </div>
          <Button
            size="sm"
            className="px-3"
            onClick={copyLinkToClipboard}
          >
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function createChatLink(chatId: string) {
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https"
  const host = window.location.host
  return `${protocol}://${host}/chat/${chatId}`
}
