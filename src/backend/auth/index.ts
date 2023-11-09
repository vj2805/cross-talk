import { adapter } from "./adapter"
import { jwt, session } from "./callbacks"
import { providers } from "./providers"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  adapter,
  callbacks: { jwt, session },
  providers,
  session: { strategy: "jwt" },
}
