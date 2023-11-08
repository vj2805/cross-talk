type ChatErrorCode = "Does Not Exist"

export class ChatError extends Error {
  constructor(chatId: string, code: ChatErrorCode) {
    super(`ChatError: ${chatId} ${code}`)
  }
}
