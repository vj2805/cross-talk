"use client"

import { Button, ErrorAlert, Skeleton, Spinner } from "@/components/ui"
import { MessageSquarePlusIcon } from "@/components/ui/icons"
import { useCreateChat } from "@/hooks/useCreateChat"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { useRequiredUser } from "@/hooks/useRequiredUser"

interface ChatCreateButtonProps {
  large?: true
}

export function ChatCreateButton({ large }: ChatCreateButtonProps) {
  const [user, isUserLoading, userError] = useRequiredUser()
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()
  const [createChat, isProcessing] = useCreateChat()

  if (isUserLoading || isLanguagesLoading) {
    return large ? (
      <Skeleton className="h-10 px-4 py-2" />
    ) : (
      <Skeleton className="aspect-square h-10 py-2" />
    )
  }

  if (userError || languageError) {
    return <ErrorAlert error={[userError, languageError]} />
  }

  return large ? (
    <Button
      variant="default"
      disabled={isProcessing}
      onClick={() => createChat(user.id)}
    >
      {isProcessing ? (
        <Spinner />
      ) : (
        preferredLanguage.translate("Create a New Chat")
      )}
    </Button>
  ) : (
    <Button
      variant="ghost"
      size="icon"
      disabled={isProcessing}
      onClick={() => createChat(user.id)}
    >
      {isProcessing ? <Spinner /> : <MessageSquarePlusIcon />}
    </Button>
  )
}
