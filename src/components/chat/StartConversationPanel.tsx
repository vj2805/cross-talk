import { MessageCircleIcon } from "@/components/ui/icons"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { cn } from "@/utilities/string"
import { ErrorAlert, Skeleton, Spinner } from "../ui"

export function ChatConversePanel() {
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()

  if (isLanguagesLoading) {
    return (
      <div className="m-5 p-20 flex-1 rounded-xl border border-muted flex flex-col justify-center items-center space-y-2 text-muted-foreground animate-pulse">
        <MessageCircleIcon className="h-32 w-32" />
        <div>
          <span className="font-bold">Invite a friend</span>
          {" & "}
          <span className="font-bold">
            Send your first message in ANY language below to get started!
          </span>
        </div>
        <div className="font-light">
          The AI will auto-detect & translate it all for you...
        </div>
      </div>
    )
  }

  if (languageError) {
    return <ErrorAlert error={languageError} />
  }

  return (
    <div className="m-5 p-20 flex-1 bg-indigo-600 text-white font-extralight rounded-xl flex flex-col justify-center items-center space-y-2">
      <MessageCircleIcon className="h-32 w-32" />
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
  )
}
