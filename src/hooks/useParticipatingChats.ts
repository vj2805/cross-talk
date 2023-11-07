import { chatService } from "@services/chat"
import type { Chat } from "@types"

export function useParticipatingChats(userId: string, initialChats: Chat[]) {
  return chatService.useParticipatingChats(userId, initialChats)
}
