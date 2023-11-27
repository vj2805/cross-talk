"use client"

import { useId } from "react"
import { useLinkToChat } from "@/hooks/useLinkToChat"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
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
  ErrorAlert,
  Input,
  Label,
} from "../ui"
import { CopyIcon } from "../ui/icons"

interface CopyChatLinkButtonProps {
  chatId: string
}

export function CopyChatLinkButton({ chatId }: CopyChatLinkButtonProps) {
  const id = useId()
  const [linkToChat, copyToClipboard] = useLinkToChat(chatId)
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()

  if (isLanguagesLoading) {
    return null
  }

  if (languageError) {
    return <ErrorAlert error={languageError} />
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <CopyIcon className="mr-2" />
          <span>{preferredLanguage.translate("Share Link")}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{preferredLanguage.translate("Share Link")}</DialogTitle>
          <DialogDescription className="text-indigo-600 font-bold">
            {preferredLanguage.translate(
              "Any user who has been granted access can use this link"
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label
              htmlFor={id}
              className="sr-only"
            >
              {preferredLanguage.translate("Link")}
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
            <span className="sr-only">
              {preferredLanguage.translate("Copy")}
            </span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button variant="secondary">
              {preferredLanguage.translate("Close")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
