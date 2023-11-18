import { ToastableError } from "./ToastableError"

export class ChatError extends ToastableError {
  name = "Chat Error"
  constructor(code: ChatErrorCode) {
    super(code)
  }
}

type ChatErrorCode = "Chat does not exist!"
