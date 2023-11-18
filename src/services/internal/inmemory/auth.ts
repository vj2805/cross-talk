import { adminAuth } from "@/backend/firebase/admin"
import { generateId } from "@/utilities/string"
import { get, set } from "./store"
import type { AuthService } from "@/types/AuthService"

const inmemoryAuthService: AuthService = {
  createAuthAdapter() {
    return {
      async createSession(session) {
        set("sessions", sessions => sessions.toSpliced(-1, 0, session))
        return session
      },
      async createUser(userInit) {
        const user = { ...userInit, id: generateId() }
        set("users", users => users.toSpliced(-1, 0, user))
        return user
      },
      async createVerificationToken(verificationToken) {
        set("tokens", tokens => tokens.toSpliced(-1, 0, verificationToken))
        return verificationToken
      },
      async deleteSession(sessionToken) {
        set("sessions", sessions =>
          sessions.filter(session => session.sessionToken !== sessionToken)
        )
      },
      async deleteUser(userId) {
        set("accounts", accounts =>
          accounts.filter(account => account.userId !== userId)
        )
        set("sessions", sessions =>
          sessions.filter(session => session.userId !== userId)
        )
        set("users", users => users.filter(user => user.id !== userId))
      },
      async getSessionAndUser(sessionToken) {
        const session = get("sessions").find(
          session => session.sessionToken === sessionToken
        )
        if (!session) {
          return null
        }
        const user = get("users").find(user => user.id === session.userId)
        if (!user) {
          return null
        }
        return { session, user }
      },
      async getUser(userId) {
        return get("users").find(user => user.id === userId) ?? null
      },
      async getUserByAccount({ provider, providerAccountId }) {
        const account = get("accounts").find(
          account =>
            account.provider === provider &&
            account.providerAccountId === providerAccountId
        )
        if (!account) {
          return null
        }
        return get("users").find(user => user.id === account.userId) ?? null
      },
      async getUserByEmail(email) {
        return get("users").find(user => user.email === email) ?? null
      },
      async linkAccount(account) {
        set("accounts", accounts => accounts.toSpliced(-1, 0, account))
        return account
      },
      async unlinkAccount({ provider, providerAccountId }) {
        set("accounts", accounts =>
          accounts.filter(
            account =>
              account.provider !== provider ||
              account.providerAccountId !== providerAccountId
          )
        )
      },

      async updateSession(partialSession) {
        const existingSession = get("sessions").find(
          session => session.sessionToken === partialSession.sessionToken
        )
        if (!existingSession) {
          return null
        }
        const updatedSession = { ...existingSession, ...partialSession }
        set("sessions", sessions =>
          sessions.map(session =>
            session.sessionToken !== partialSession.sessionToken
              ? session
              : updatedSession
          )
        )
        return updatedSession
      },
      async updateUser(partialUser) {
        const existingUser = get("users").find(
          user => user.id === partialUser.id
        )
        if (!existingUser) {
          throw new Error()
        }
        const updatedUser = { ...existingUser, ...partialUser }
        set("users", users =>
          users.map(user => (user.id !== partialUser.id ? user : updatedUser))
        )
        return updatedUser
      },
      async useVerificationToken({ identifier, token }) {
        const vt = get("tokens").find(
          vt => vt.identifier === identifier && vt.token === token
        )
        if (!vt) {
          return null
        }
        set("tokens", tokens => tokens.filter(t => t != vt))
        return vt
      },
    }
  },
  createAuthToken({ userId }) {
    return adminAuth.createCustomToken(userId)
  },
}

export default inmemoryAuthService
