import { MessageCircleIcon } from "@/components/ui/icons"
import { useTranslate } from "@/hooks/useTranslate"
import { cn } from "@/utilities/string"

export const StartConversation: React.FC = () => {
  const translate = useTranslate()
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
          <span className="font-bold">{translate("Invite a friend")}</span>
          {" & "}
          <span className="font-bold">
            {translate(
              "Send your first message in ANY language below to get started!"
            )}
          </span>
        </h2>
        <p>
          {translate("The AI will auto-detect & translate it all for you...")}
        </p>
      </div>
    </div>
  )
}
