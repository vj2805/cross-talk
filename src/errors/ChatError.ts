export class ChatError extends Error {
  constructor(chatId: string, code: ChatErrorCode) {
    super(`ChatError: ${chatId} ${code}`)
  }
}

export type ChatErrorCode = "Does Not Exist"
