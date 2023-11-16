import { cn } from "@/utilities/string"
import { getWelcome } from "@/constants/welcomes"
import { MessageSquareIcon } from "../ui/icons"
import { CreateChatButton } from "./CreateChatButton"
import type { Language } from "@/types/Language"

interface WelcomeToChatsProps {
  language: Language
}

export const WelcomeToChats: React.FC<WelcomeToChatsProps> = ({ language }) => {
  const welcome = getWelcome(language)
  return (
    <div
      className={cn(
        "pt-40",
        "flex flex-col justify-center items-center space-y-2"
      )}
    >
      <MessageSquareIcon className="h-10 w-10" />
      <h1 className="text-5xl font-extralight">{welcome.greeting}</h1>
      <h2 className="pb-10">{welcome.message}</h2>
      <CreateChatButton large />
    </div>
  )
}
