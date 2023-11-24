import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { cn } from "@/utilities/string"
import { ErrorAlert, Spinner } from "../ui"
import { MessageSquareIcon } from "../ui/icons"
import { CreateChatButton } from "./CreateChatButton"

export const EmptyChatList: React.FC = () => {
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()

  if (isLanguagesLoading) {
    return <Spinner />
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
      <CreateChatButton large />
    </div>
  )
}
