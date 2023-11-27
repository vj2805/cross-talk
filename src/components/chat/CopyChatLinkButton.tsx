"use client"

import { useId } from "react"
import { useLinkToChat } from "@/hooks/useLinkToChat"
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
} from "../ui"
import { CopyIcon } from "../ui/icons"

interface CopyChatLinkButtonProps {
  chatId: string
}

export function CopyChatLinkButton({ chatId }: CopyChatLinkButtonProps) {
  const [linkToChat, copyToClipboard] = useLinkToChat(chatId)
  const id = useId()

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
          <DialogDescription className="text-indigo-600 font-bold">
            Any user who has been granted access can use this link
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
            onClick={copyToClipboard}
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
