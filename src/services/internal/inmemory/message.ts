import { Timestamp } from "firebase/firestore"
import { generateId } from "@/utilities/string"
import { compareTimestamps } from "@/utilities/timestamps"
import { get, set, subscribe } from "./store"
import type { Message } from "@/types/Message"
import type { MessageService } from "@/types/MessageService"

const inmemoryMessageService: MessageService = {
  async getMessages({ chatId }) {
    return get("messages")
      .filter(message => message.id.includes(chatId))
      .sort((x, y) => compareTimestamps(x.timestamp, y.timestamp))
  },
  async getMessagesCount({ chatId }) {
    return get("messages").reduce(
      (count, message) => count + (message.id.includes(chatId) ? 1 : 0),
      0
    )
  },
  async postMessage({ chatId, input, user }) {
    set("messages", messages =>
      messages.toSpliced(-1, 0, {
        id: `chat:${chatId}:message:${generateId()}`,
        input,
        timestamp: Timestamp.fromDate(new Date()),
        user,
      })
    )
  },
  subscribeToLastMessage({ chatId }, onChange) {
    return subscribe("messages", messages =>
      onChange(
        messages.reduce<Nullish<Message>>(
          (lastMessage, message) =>
            !message.id.includes(chatId)
              ? lastMessage
              : lastMessage === null
              ? message
              : compareTimestamps(lastMessage.timestamp, message.timestamp)
              ? lastMessage
              : message,
          null
        )
      )
    )
  },
  subscribeToMessages({ chatId }, onChange) {
    return subscribe("messages", messages =>
      onChange(
        messages
          .filter(message => message.id.includes(chatId))
          .sort((x, y) => compareTimestamps(x.timestamp, y.timestamp))
      )
    )
  },
}

export default inmemoryMessageService
