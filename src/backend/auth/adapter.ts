import { FirestoreAdapter } from "@auth/firebase-adapter"
import { generateId } from "@utilities/string"
import { adminRepo } from "../firebase-admin"
import type { NextAuthOptions } from "next-auth"
import type {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters"

export const adapter: NextAuthOptions["adapter"] = FirestoreAdapter(adminRepo)

let users: AdapterUser[] = []
let accounts: AdapterAccount[] = []
let sessions: AdapterSession[] = []
let verificationTokens: VerificationToken[] = []

const inMemoryAdapter: NextAuthOptions["adapter"] = {
  async createSession(session) {
    return add(sessions, session)
  },
  async createUser(userInit) {
    return add(users, { id: generateId(), ...userInit })
  },
  async createVerificationToken(verificationToken) {
    return add(verificationTokens, verificationToken)
  },
  async deleteSession(sessionToken) {
    sessions = remove(
      sessions,
      session => session.sessionToken === sessionToken
    )
  },
  async deleteUser(userId) {
    users = remove(users, user => user.id === userId)
    accounts = remove(accounts, account => account.userId === userId)
    sessions = remove(sessions, session => session.userId === userId)
  },
  async getSessionAndUser(sessionToken) {
    const session = sessions.find(
      session => session.sessionToken === sessionToken
    )
    if (!session) {
      return null
    }
    const user = users.find(user => user.id === session.userId)
    if (!user) {
      return null
    }
    return { session, user }
  },
  async getUser(id) {
    return users.find(user => user.id === id) || null
  },
  async getUserByAccount({ provider, providerAccountId }) {
    const account = accounts.find(
      account =>
        account.provider === provider &&
        account.providerAccountId === providerAccountId
    )
    if (!account) {
      return null
    }
    return users.find(user => user.id === account.userId) || null
  },
  async getUserByEmail(email) {
    return users.find(user => user.email === email) || null
  },
  async linkAccount(account) {
    return add(accounts, account)
  },
  async unlinkAccount({ provider, providerAccountId }) {
    accounts = remove(
      accounts,
      account =>
        account.provider === provider &&
        account.providerAccountId === providerAccountId
    )
  },
  async updateSession(partialSession) {
    const index = sessions.findIndex(
      session => session.sessionToken === partialSession.sessionToken
    )
    if (index < 0) {
      return null
    }
    return update(sessions, index, partialSession)
  },
  async updateUser(partialUser) {
    if (!partialUser.id) {
      throw new Error("[updateUser] Missing User Id")
    }
    const index = users.findIndex(user => user.id === partialUser.id)
    return update(users, index, partialUser)
  },
  async useVerificationToken({ identifier, token }) {
    const verificationToken = verificationTokens.find(
      verificationToken =>
        verificationToken.identifier === identifier &&
        verificationToken.token === token
    )
    if (!verificationToken) {
      return null
    }
    verificationTokens = remove(
      verificationTokens,
      verificationToken =>
        verificationToken.identifier === identifier &&
        verificationToken.token === token
    )
    return verificationToken
  },
}

function add<T>(array: T[], element: T) {
  array.push(element)
  return element
}

function update<T, F>(array: T[], index: number, element: Partial<T>) {
  const existing = array[index]
  const updated = { ...existing, ...element }
  array.splice(index, 1, updated)
  return updated
}

function remove<T>(array: T[], predicate: (element: T) => boolean) {
  let count = 0
  return array.filter(element => !predicate(element))
}
