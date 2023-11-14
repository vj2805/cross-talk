import { subscribeWithSelector } from "zustand/middleware"
import { createStore } from "zustand/vanilla"
import type { Chat } from "@/types/Chat"
import type { Checkout } from "@/types/Checkout"
import type { Consumer } from "@/types/Consumer"
import type { Message } from "@/types/Message"
import type { Subscription } from "@/types/Subscription"
import type { User } from "@/types/User"
import type {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters"

type InMemoryStore = {
  accounts: AdapterAccount[]
  chats: Chat[]
  checkouts: Record<User["id"], Checkout[]>
  messages: Record<Chat["id"], Message[]>
  sessions: AdapterSession[]
  subscriptions: Record<User["id"], Subscription[]>
  tokens: VerificationToken[]
  users: AdapterUser[]
}

const store = createStore<InMemoryStore>()(
  subscribeWithSelector<InMemoryStore>(() => ({
    accounts: [],
    chats: [],
    checkouts: {},
    messages: {},
    sessions: [],
    subscriptions: {},
    tokens: [],
    users: [],
  }))
)

export function getInMemoryState<Key extends keyof InMemoryStore>(key: Key) {
  return store.getState()[key]
}

export function setInMemoryState<Key extends keyof InMemoryStore>(
  key: Key,
  update: (existing: InMemoryStore[Key]) => InMemoryStore[Key]
) {
  store.setState(store => ({ [key]: update(store[key]) }))
}

export function subscribeToInMemoryStore<Key extends keyof InMemoryStore, U>(
  key: Key,
  selector: (value: InMemoryStore[Key]) => U,
  onChange: Consumer<U>,
  options?: {
    equalityFn?: (a: U, b: U) => boolean
    fireImmediately?: boolean
  }
) {
  return store.subscribe(store => selector(store[key]), onChange, options)
}
