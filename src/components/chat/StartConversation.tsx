import { MessageCircleIcon } from "@/components/ui/icons"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { cn } from "@/utilities/string"
import { ErrorAlert, Spinner } from "../ui"

export const StartConversation: React.FC = () => {
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()

  if (isLanguagesLoading) {
    return <Spinner />
  }

  if (languageError) {
    return <ErrorAlert error={languageError} />
  }

  return (
    <div className={cn("p-5", "flex-1")}>
      <div
        className={cn(
          "p-20",
          "bg-indigo-500",
          "text-white font-extralight",
          "rounded-xl",
          "flex flex-col justify-center items-center space-y-2"
        )}
      >
        <MessageCircleIcon className="h-10 w-10" />
        <h2>
          <span className="font-bold">
            {preferredLanguage.translate("Invite a friend")}
          </span>
          {" & "}
          <span className="font-bold">
            {preferredLanguage.translate(
              "Send your first message in ANY language below to get started!"
            )}
          </span>
        </h2>
        <p>
          {preferredLanguage.translate(
            "The AI will auto-detect & translate it all for you..."
          )}
        </p>
      </div>
    </div>
  )
}
