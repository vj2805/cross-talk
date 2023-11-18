export class ChatError extends Error {
  name = "Chat Error"
  constructor(code: ChatErrorCode) {
    super(code)
  }
}

type ChatErrorCode = "Chat does not exist!"
