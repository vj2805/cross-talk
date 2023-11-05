import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { env } from "./env"
import { adminAuth, adminRepo } from "./firebase-admin"
import type { CallbacksOptions, NextAuthOptions } from "next-auth"

const jwt: CallbacksOptions["jwt"] = async ({ user, token }) => {
  if (user) {
    token.sub = user.id
  }
  return token
}

const session: CallbacksOptions["session"] = async ({ session, token }) => {
  if (session.user && token.sub) {
    session.user.id = token.sub
    session.firebaseToken = await adminAuth.createCustomToken(token.sub)
  }
  return session
}

const google = GoogleProvider({
  clientId: env["GOOGLE_CLIENT_ID"],
  clientSecret: env["GOOGLE_CLIENT_SECRET"],
})

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(adminRepo),
  callbacks: { jwt, session },
  providers: [google],
  session: { strategy: "jwt" },
}
