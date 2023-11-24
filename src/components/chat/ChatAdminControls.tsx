import type { Chat } from "@/types/Chat"
import { cn } from "@/utilities/string"
import { CopyChatLinkButton } from "./CopyChatLinkButton"
import { ChatDeleteButton } from "./DeleteChatButton"
import { InviteUserToChat } from "./InviteUserToChatButton"

interface ChatAdminControlsProps {
  chat: Chat
}

export function ChatAdminControls({ chat }: ChatAdminControlsProps) {
  return (
    <div className={cn("m-5 mb-0", "flex justify-end space-x-2")}>
      <InviteUserToChat chat={chat} />
      <CopyChatLinkButton chatId={chat.id} />
      <ChatDeleteButton
        chatId={chat.id}
        adminId={chat.adminId}
      />
    </div>
  )
}
