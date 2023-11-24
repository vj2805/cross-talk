import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { cn } from "@/utilities/string"
import { ErrorAlert, Skeleton } from "../ui"
import { MessageSquareIcon } from "../ui/icons"
import { ChatCreateButton } from "./CreateChatButton"

export const WelcomeToChatPanel: React.FC = () => {
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()

  if (isLanguagesLoading) {
    return (
      <div className="pt-40 flex flex-col justify-center items-center space-y-2 text-muted-foreground animate-pulse">
        <MessageSquareIcon className="h-10 w-10" />
        <div className="text-5xl font-extralight">Welcome!</div>
        <div className="py-10 text-center">
          Let&apos;s get you started by creating your first chat!
        </div>
        <Skeleton className="h-10 px-4 py-2 animate-none">
          Create a New Chat
        </Skeleton>
      </div>
    )
  }

  if (languageError) {
    return <ErrorAlert error={languageError} />
  }

  return (
    <div
      className={cn(
        "pt-40",
        "flex flex-col justify-center items-center space-y-2"
      )}
    >
      <MessageSquareIcon className="h-10 w-10" />
      <h1 className="text-5xl font-extralight">
        {preferredLanguage.translate("Welcome!")}
      </h1>
      <h2 className="py-10 text-center">
        {preferredLanguage.translate(
          "Let's get you started by creating your first chat!"
        )}
      </h2>
      <ChatCreateButton large />
    </div>
  )
}
