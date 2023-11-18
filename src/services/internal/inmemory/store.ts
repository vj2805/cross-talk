import { createStore } from "@/utilities/store"
import type { Chat } from "@/types/Chat"
import type { Checkout } from "@/types/Checkout"
import type { Message } from "@/types/Message"
import type { Subscription } from "@/types/Subscription"
import type {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters"

interface Store {
  accounts: AdapterAccount[]
  chats: Chat[]
  checkouts: Checkout[]
  messages: Message[]
  sessions: AdapterSession[]
  subscriptions: Subscription[]
  tokens: VerificationToken[]
  users: AdapterUser[]
}

export const { get, set, subscribe } = createStore<Store>({
  accounts: [],
  chats: [],
  checkouts: [],
  messages: [],
  sessions: [],
  subscriptions: [],
  tokens: [],
  users: [],
})
