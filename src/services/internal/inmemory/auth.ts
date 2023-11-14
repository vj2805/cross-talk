import { insert, remove, shuffle, update } from "@/utilities/array"
import { generateId } from "@/utilities/string"
import { getInMemoryState } from "./store"
import type { AuthService } from "@/types/AuthService"

const inMemoryAuthService: AuthService = {
  createAuthAdapter() {
    return {
      async createSession(session) {
        return insert(getInMemoryState("sessions"), session)
      },
      async createUser(userInit) {
        return insert(getInMemoryState("users"), {
          id: generateId(),
          ...userInit,
        })
      },
      async createVerificationToken(verificationToken) {
        return insert(getInMemoryState("tokens"), verificationToken)
      },
      async deleteSession(sessionToken) {
        remove(
          getInMemoryState("sessions"),
          session => session.sessionToken === sessionToken
        )
      },
      async deleteUser(userId) {
        remove(getInMemoryState("users"), user => user.id === userId)
        remove(
          getInMemoryState("accounts"),
          account => account.userId === userId
        )
        remove(
          getInMemoryState("sessions"),
          session => session.userId === userId
        )
      },
      async getSessionAndUser(sessionToken) {
        const session = getInMemoryState("sessions").find(
          session => session.sessionToken === sessionToken
        )
        if (!session) {
          return null
        }
        const user = getInMemoryState("users").find(
          user => user.id === session.userId
        )
        if (!user) {
          return null
        }
        return { session, user }
      },
      async getUser(id) {
        return getInMemoryState("users").find(user => user.id === id) || null
      },
      async getUserByAccount({ provider, providerAccountId }) {
        const account = getInMemoryState("accounts").find(
          account =>
            account.provider === provider &&
            account.providerAccountId === providerAccountId
        )
        if (!account) {
          return null
        }
        return (
          getInMemoryState("users").find(user => user.id === account.userId) ||
          null
        )
      },
      async getUserByEmail(email) {
        return (
          getInMemoryState("users").find(user => user.email === email) || null
        )
      },
      async linkAccount(account) {
        return insert(getInMemoryState("accounts"), account)
      },
      async unlinkAccount({ provider, providerAccountId }) {
        remove(
          getInMemoryState("accounts"),
          account =>
            account.provider === provider &&
            account.providerAccountId === providerAccountId
        )
      },
      async updateSession(partialSession) {
        const index = getInMemoryState("sessions").findIndex(
          session => session.sessionToken === partialSession.sessionToken
        )
        if (index < 0) {
          return null
        }
        return update(getInMemoryState("sessions"), index, partialSession)
      },
      async updateUser(partialUser) {
        if (!partialUser.id) {
          throw new Error("[updateUser] Missing User Id")
        }
        const index = getInMemoryState("users").findIndex(
          user => user.id === partialUser.id
        )
        return update(getInMemoryState("users"), index, partialUser)
      },
      async useVerificationToken({ identifier, token }) {
        const [verificationToken] = remove(
          getInMemoryState("tokens"),
          verificationToken =>
            verificationToken.identifier === identifier &&
            verificationToken.token === token
        )
        return verificationToken ?? null
      },
    }
  },
  async createAuthToken(userId) {
    return shuffle(userId.split("")).join("")
  },
}

export default inMemoryAuthService
