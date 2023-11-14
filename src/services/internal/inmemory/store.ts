import { createStore } from "zustand/vanilla"
import { subscribeWithSelector } from "zustand/middleware"
import type {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters"

type InMemoryStore = {
  accounts: AdapterAccount[]
  sessions: AdapterSession[]
  tokens: VerificationToken[]
  users: AdapterUser[]
}

const store = createStore<InMemoryStore>()(
  subscribeWithSelector<InMemoryStore>(() => ({
    accounts: [],
    sessions: [],
    tokens: [],
    users: [],
  }))
)

export function getInMemoryState<Key extends keyof InMemoryStore>(key: Key) {
  return store.getState()[key]
}
