import { cn } from "@/utilities/string"
import { InviteUserToChat } from "./InviteUserToChat"
import { CopyChatLink } from "./CopyChatLink"
import { DeleteChatButton } from "./DeleteChatButton"
import type { Chat } from "@/types/Chat"

interface ChatAdminControlsProps {
  chat: Chat
}

export const ChatAdminControls: React.FC<ChatAdminControlsProps> = ({
  chat,
}) => (
  <div className={cn("m-5 mb-0", "flex justify-end space-x-2")}>
    <InviteUserToChat chat={chat} />
    <CopyChatLink chatId={chat.id} />
    <DeleteChatButton
      chatId={chat.id}
      adminId={chat.adminId}
    />
  </div>
)