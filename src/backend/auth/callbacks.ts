import { adminAuth } from "../firebase-admin"
import type { CallbacksOptions } from "next-auth"

export const jwt: CallbacksOptions["jwt"] = async ({ user, token }) => {
  if (user) {
    token.sub = user.id
  }
  return token
}

export const session: CallbacksOptions["session"] = async ({
  session,
  token,
}) => {
  if (session.user && token.sub) {
    session.user.id = token.sub
    session.firebaseToken = await adminAuth.createCustomToken(token.sub)
  }
  return session
}
