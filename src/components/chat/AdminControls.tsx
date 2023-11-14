import { cn } from "@/utilities/string"
import { InviteUser } from "./InviteUser"
import { ShareLink } from "./ShareLink"
import type { Chat } from "@/types/Chat"

interface AdminControlsProps {
  chat: Chat
}

export const AdminControls: React.FC<AdminControlsProps> = ({ chat }) => (
  <div className={cn("m-5 mb-0", "flex justify-end space-x-2")}>
    <InviteUser chat={chat} />
    <ShareLink chatId={chat.id} />
  </div>
)
