import { MessageCircleIcon } from "@/components/ui/icons"
import { getStartConversationDetails } from "@/constants/conversations"
import { cn } from "@/utilities/string"
import type { Language } from "@/types/Language"

interface StartConversationProps {
  language: Language
}

export const StartConversation: React.FC<StartConversationProps> = ({
  language,
}) => {
  const details = getStartConversationDetails(language)
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
          <span className="font-bold">{details["Invite a friend"]}</span> &{" "}
          <span className="font-bold">
            {
              details[
                "Send your first message in ANY language below to get started!"
              ]
            }
          </span>
        </h2>
        <p>{details["The AI will auto-dect & translate it all for you..."]}</p>
      </div>
    </div>
  )
}
