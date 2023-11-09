export interface Chat {
  id: string
  adminId: string
  participantsIds: string[]
}

export type ChatErrorCode = "Does Not Exist"

export class ChatError extends Error {
  constructor(chatId: string, code: ChatErrorCode) {
    super(`ChatError: ${chatId} ${code}`)
  }
}
