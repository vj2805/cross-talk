import { cn } from "@/utilities/string"
import { MessageSquareIcon } from "../ui/icons"
import { CreateChatButton } from "./CreateChatButton"

export const WelcomeToChats: React.FC = () => (
  <div
    className={cn(
      "pt-40",
      "flex flex-col justify-center items-center space-y-2"
    )}
  >
    <MessageSquareIcon className="h-10 w-10" />
    <h1 className="text-5xl font-extralight">Welcome!</h1>
    <h2 className="pb-10">
      Let&apos;s get you started by creating your first chat!
    </h2>
    <CreateChatButton large />
  </div>
)
