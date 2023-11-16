import { MessageCircleIcon } from "@/components/ui/icons"
import { getTranslation } from "@/utilities/translations"
import { cn } from "@/utilities/string"
import type { Language } from "@/types/Language"

interface StartConversationProps {
  language: Language
}

export const StartConversation: React.FC<StartConversationProps> = ({
  language,
}) => (
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
          {getTranslation("Invite a friend", language)}
        </span>
        {" & "}
        <span className="font-bold">
          {getTranslation(
            "Send your first message in ANY language below to get started!",
            language
          )}
        </span>
      </h2>
      <p>
        {getTranslation(
          "The AI will auto-detect & translate it all for you...",
          language
        )}
      </p>
    </div>
  </div>
)
