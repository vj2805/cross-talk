import GoogleProvider from "next-auth/providers/google"
import { env } from "../../env"
import type { NextAuthOptions } from "next-auth"

const google = GoogleProvider({
  clientId: env["GOOGLE_CLIENT_ID"],
  clientSecret: env["GOOGLE_CLIENT_SECRET"],
})

export const providers: NextAuthOptions["providers"] = [google]
