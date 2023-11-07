import { createInMemoryChatService } from "./InMemoryChatService"
import type { ChatService } from "./ChatService"

export const chatService: ChatService = createInMemoryChatService()
