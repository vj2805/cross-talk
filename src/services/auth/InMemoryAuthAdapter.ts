import { generateId } from "@utilities/string"
import { insert, remove, update } from "@utilities/array"
import type {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters"

let users: AdapterUser[] = []
let accounts: AdapterAccount[] = []
let sessions: AdapterSession[] = []
let tokens: VerificationToken[] = []

export default function createInMemoryAuthAdapter(): Adapter {
  return {
    async createSession(session) {
      return insert(sessions, session)
    },
    async createUser(userInit) {
      return insert(users, { id: generateId(), ...userInit })
    },
    async createVerificationToken(verificationToken) {
      return insert(tokens, verificationToken)
    },
    async deleteSession(sessionToken) {
      remove(sessions, session => session.sessionToken === sessionToken)
    },
    async deleteUser(userId) {
      remove(users, user => user.id === userId)
      remove(accounts, account => account.userId === userId)
      remove(sessions, session => session.userId === userId)
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
      return insert(accounts, account)
    },
    async unlinkAccount({ provider, providerAccountId }) {
      remove(
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
      const [verificationToken] = remove(
        tokens,
        verificationToken =>
          verificationToken.identifier === identifier &&
          verificationToken.token === token
      )
      return verificationToken ?? null
    },
  }
}
