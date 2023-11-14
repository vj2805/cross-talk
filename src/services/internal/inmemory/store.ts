import { createStore } from "zustand/vanilla"
import { subscribeWithSelector } from "zustand/middleware"
import type { Chat } from "@/types/Chat"
import type {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters"

type InMemoryStore = {
  accounts: AdapterAccount[]
  chats: Chat[]
  sessions: AdapterSession[]
  tokens: VerificationToken[]
  users: AdapterUser[]
}

const store = createStore<InMemoryStore>()(
  subscribeWithSelector<InMemoryStore>(() => ({
    accounts: [],
    chats: [],
    sessions: [],
    tokens: [],
    users: [],
  }))
)

export function getInMemoryState<Key extends keyof InMemoryStore>(key: Key) {
  return store.getState()[key]
}

export function setInMemoryStore<Key extends keyof InMemoryStore>(
  key: Key,
  update: (existing: InMemoryStore[Key]) => InMemoryStore[Key]
) {
  store.setState(store => ({ [key]: update(store[key]) }))
}
