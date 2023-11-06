import type { Message } from "@types"
import type { User } from "next-auth"

interface ChatMessagesProps {
  chatId: string
  user: User
  initialMessages: Message[]
}

export const ChatMessages: React.FC<ChatMessagesProps> = () => {
  return <div>ChatMessages</div>
}
